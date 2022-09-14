#! /usr/bin/env node
import semver from 'semver'
import { exec } from 'child_process'
import { readFile, writeFile } from 'fs/promises'

const REPO_URL = 'https://github.com/nrkno/Sofie-TV-automation'
const START_OF_LAST_RELEASE_PATTERN = /(^#+ \[?[0-9]+\.[0-9]+\.[0-9]+|<a name=)/m
const HEADER = `# Changelog\n\nAll notable changes to this project will be documented in this file. See [Convential Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for commit guidelines.\n\n`

const execPromise = (command) => new Promise((r) => exec(command, (e, out) => (e && r(e)) || r(out)))

const isPrerelease = !!process.argv.find((arg) => arg === '--prerelease')
const isDryRun = !!process.argv.find((arg) => arg === '--dry-run')

const packageFile = JSON.parse(await readFile('./package.json', { encoding: 'utf-8' }))
const currentVersion = packageFile.version
const repoUrl = packageFile.homepage.split('#')[0] || REPO_URL

// find last valid tag
const tags = (await execPromise('git tag -l --sort=-v:refname')).split('\n')
const lastTag = tags.find((tag) => semver.valid(tag))

// find diff since last tag
const rawDiff = await execPromise(`git log --format=+++%s__%b__%h__%H ${lastTag}..HEAD`)
const diff = rawDiff.split('+++').map((rawCommit) => {
	const [subject, body, short, hash] = rawCommit.split('__')
	return { subject, body, short, hash }
})

// categorise the diff
const breakingChanges = {}
const changes = {}

{
	const conventional = /^(?<type>\w+)(?<scope>(?:\([^()\r\n]*\)|\()?(?<breaking>!)?)(?<subject>:.*)?/g
	let commit = diff.shift()
	while (commit) {
		const match = conventional.exec(commit.subject)

		if (match && match.groups) {
			const { breaking, type, subject, scope } = match.groups
			const toAdd = breaking ? breakingChanges : changes

			if (!toAdd[type]) toAdd[type] = []

			toAdd[type].push({
				...commit,
				description: subject?.slice(2) || commit.subject,
				scope: scope,
			})
		}

		commit = diff.shift()
	}
}

// create a markdown changelog
const groups = {
	feat: 'Features',
	fix: 'Fixes',
}
const hasBreaking = Object.keys(breakingChanges).length > 0
const hasFeatures = changes['feat']?.length > 0
const nextVersion = semver.inc(
	currentVersion,
	(isPrerelease ? 'pre' : '') + (hasBreaking ? 'major' : hasFeatures ? 'minor' : 'patch')
)
let md = `## [${nextVersion}](${repoUrl}/compare/${lastTag}...v${nextVersion}) (${new Date().toDateString()})\n`

if (Object.keys(breakingChanges).length) {
	md += '\n## Breaking changes\n'

	for (const [type, commits] of Object.entries(breakingChanges)) {
		if (!groups[type]) continue
		md += '\n### ' + groups[type] + '\n'

		for (const change of commits) {
			console.log(change)
			md += `\n* ${change.scope ? `**${change.scope}** ` : ''}${change.description} [${
				change.short
			}](${repoUrl}/commit/${change.hash.trim()})`
		}
	}
}
if (Object.keys(changes).length) {
	for (const [type, commits] of Object.entries(changes)) {
		if (!groups[type]) continue
		md += '\n\n### ' + groups[type] + '\n'

		for (const change of commits) {
			md += `\n* ${change.scope ? `**${change.scope}** ` : ''}${change.description} [${
				change.short
			}](${repoUrl}/commit/${change.hash.trim()})`
		}
	}
}

// Add to the changelog file
let oldContent = await readFile('./CHANGELOG.md', { encoding: 'utf-8' })
const oldContentStart = oldContent.search(START_OF_LAST_RELEASE_PATTERN)
if (oldContentStart !== -1) {
	oldContent = oldContent.substring(oldContentStart)
}

if (!isDryRun) {
	await writeFile('./CHANGELOG.md', HEADER + md + '\n\n' + oldContent)

	// update the package.json
	await execPromise('yarn version --no-git-tag-version --new-version ' + nextVersion)

	// git commit
	await execPromise(`git add package.json yarn.lock CHANGELOG.md`)

	await execPromise(`git commit -m "chore(release): v${nextVersion}"`)

	// create tag
	await execPromise(`git tag v${nextVersion}`)
} else {
	console.log(HEADER + md)
}
