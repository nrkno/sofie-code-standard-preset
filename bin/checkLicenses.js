#! /usr/bin/env node
'use strict'
const meow = require('meow')
const shell = require('shelljs')
const readPkgUp = require('read-pkg-up')

const cli = meow(
	`
    Usage
      $ sofie-licensecheck

    Options
	  --debug  Show full packages list
	  --allowPackages Semi-colon separated list of packages to ignore (eg cycle@1.0.3;underscore@1.12.0)
`,
	{
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

// This is so that when used in a private project it validates
const pkgInfo = readPkgUp.sync()
const projectNameAndVersion = `${pkgInfo.packageJson.name}@${pkgInfo.packageJson.version}`

// TODO - Add option driven allowList selection with a list for GPL projects
const allowListForMit = 'MIT;BSD;ISC;Apache-2.0;CC0;CC-BY-3.0;Unlicense;Artistic-2.0'

let excludePackages = projectNameAndVersion
if (cli.flags.allowPackages) {
	excludePackages += `;${cli.flags.allowPackages}`
}

let cmd = ['license-checker', `--onlyAllow "${allowListForMit}"`, `--excludePackages "${excludePackages}"`]

if (!cli.flags.debug) {
	cmd.push('--summary')
}

const res = shell.exec(cmd.join(' '))
process.exit(res.code)
