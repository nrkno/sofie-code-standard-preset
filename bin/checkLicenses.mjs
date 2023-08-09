#! /usr/bin/env node
'use strict'
import meow from 'meow'
import { createRequire } from 'module'
import { readPackageUpSync } from 'read-pkg-up'
import shell from 'shelljs'
import path from 'path'

const cli = meow(
	`
    Usage
      $ sofie-licensecheck

    Options
	  --debug  Show full packages list
	  --allowPackages Semi-colon separated list of packages to ignore (eg cycle@1.0.3;underscore@1.12.0)
`,
	{
		importMeta: import.meta,
		flags: {
			debug: {
				type: 'boolean',
			},
			allowPackages: {
				type: 'string',
			},
		},
	}
)

// Find the path of the license-checker executable
const require = createRequire(import.meta.url)
const dir = require.resolve('license-checker')
const licenseCheckerInfo = readPackageUpSync({ cwd: dir })
const binName = licenseCheckerInfo.packageJson.bin?.['license-checker']
if (licenseCheckerInfo.packageJson.name !== 'license-checker' || !binName)
	throw new Error('Failed to find license-checker')
const binPath = path.join(path.dirname(licenseCheckerInfo.path), binName)

// This is so that when used in a private project it validates
const pkgInfo = readPackageUpSync()
const projectNameAndVersion = `${pkgInfo.packageJson.name}@${pkgInfo.packageJson.version}`

// TODO - Add option driven allowList selection with a list for GPL projects
const allowListForMit = 'MIT;BSD;ISC;Apache-2.0;CC0;CC-BY-3.0;CC-BY-4.0;Unlicense;Artistic-2.0;Python-2.0;BlueOak-1.0.0'

let excludePackages = projectNameAndVersion
if (cli.flags.allowPackages) {
	excludePackages += `;${cli.flags.allowPackages}`
}

let cmd = [binPath, `--onlyAllow "${allowListForMit}"`, `--excludePackages "${excludePackages}"`]

if (!cli.flags.debug) {
	cmd.push('--summary')
}

const res = shell.exec(cmd.join(' '))
process.exit(res.code)
