#! /usr/bin/env node
'use strict'
import meow from 'meow'
import { readPackageUpSync } from 'read-pkg-up'
import path from 'path'
import checker from 'license-checker'

const cli = meow(
	`
    Usage
      $ sofie-licensecheck
	  $ sofie-licensecheck --allowPackages "package-name@1.2.3;other-package@1.2.3"

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

// This is so that when used in a private project it validates
const pkgInfo = readPackageUpSync()
const projectNameAndVersion = `${pkgInfo.packageJson.name}@${pkgInfo.packageJson.version}`

// TODO - Add option driven allowList selection with a list for GPL projects
const allowListForMit = 'MIT;BSD;ISC;Apache-2.0;CC0;CC-BY-3.0;CC-BY-4.0;Unlicense;Artistic-2.0;Python-2.0;BlueOak-1.0.0'

let excludePackages = projectNameAndVersion
if (cli.flags.allowPackages) {
	excludePackages += `;${cli.flags.allowPackages}`
}

checker.init({
	start: path.resolve('.'),
	onlyAllow: allowListForMit,
	excludePackages: excludePackages,
	summary: !cli.flags.debug
}, (err, packages) => {

	if (err) {
		//Handle error
		console.error(err)
		process.exit(1)
	} else {
		if (cli.flags.debug) {
			console.log(packages)
		}
		process.exit(0)
	}
});
