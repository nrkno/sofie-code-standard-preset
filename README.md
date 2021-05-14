# Sofie: The Modern TV News Studio Automation System (code standard preset)

[![Node CI](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/actions/workflows/node.yaml/badge.svg)](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/actions/workflows/node.yaml)
[![npm](https://img.shields.io/npm/v/@sofie-automation/code-standard-preset)](https://www.npmjs.com/package/@sofie-automation/code-standard-preset)

This library is used in the [**Sofie** TV News Studio Automation System](https://github.com/nrkno/Sofie-TV-automation/) for defining a code standard preset through [eslint](https://esling.org) and [prettier](https://prettier.io/).

A script for checking compatible licenses is included.

## Installation

`yarn add --dev @sofie-automation/code-standard-preset`

### Packages

**Add** the following information to your `package.json`:

```json
{
    ...,
    "scripts": {
        ...,
        "lint": "eslint . --ext .ts --ext .js --ext .tsx --ext .jsx --ignore-pattern dist",
        "lint-fix": "yarn lint --fix",
        "license-validate": "yarn sofie-licensecheck"
    },
    "prettier": "@sofie-automation/code-standard-preset/.prettierrc.json",
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{css,json,md,scss}": [
            "prettier --write"
        ],
        "*.{ts,tsx,js,jsx}": [
            "yarn lint-fix"
        ]
    },
    ...
}
```

**Adjust** build script references to make sure they use `tsconfig.build.json`, e.g. `tsc -p tsconfig.build.json`.

**Ensure** the following development dependencies are present:

- `@types\node` and `@types\jest` (if using)
- Typescript 4 or above, e.g. `~4.0` with an up-to-date `ts-lib`
- `jest` and `ts-jest`, if using

**Remove** any other linting configurations or linters. Also, `node-license-validator` is no longer required. Remove libraries that are re-exported by this project `husky`, `lint-staged` and `prettier`

### Files

**Add** the following files:

_.eslintrc.json_

```json
{
	"extends": "./node_modules/@sofie-automation/code-standard-preset/eslint/main"
}
```

Add _.eslintignore_ if any folders or files should be ignored by the linter.

_tsconfig.json_

```json
{
	"extends": "./tsconfig.build.json",
	"exclude": ["node_modules/**"],
	"compilerOptions": {
		"types": ["jest", "node"]
	}
}
```

_tsconfig.build.json_

```json
{
	"extends": "@sofie-automation/code-standard-preset/ts/tsconfig.lib",
	"include": ["src/**/*.ts"],
	"exclude": ["node_modules/**", "src/**/*spec.ts", "src/**/__tests__/*", "src/**/__mocks__/*"],
	"compilerOptions": {
		"outDir": "./dist",
		"baseUrl": "./",
		"paths": {
			"*": ["./node_modules/*"],
			"{{PACKAGE-NAME}}": ["./src/index.ts"]
		},
		"types": ["node"]
	}
}
```

_Note: If you are using this in a 'binary' package, then you should use `tsconfig.bin` instead of `tsconfig.lib`. This adjusts the build and output slightly._

_Note: replace the {{PACKAGE-NAME}} with the correct package name, i.e. `hyperdeck-connection`_

**Optionally include** a _.gitattributes_ file:

```
* text=auto eol=lf
```

**Adjust** jest configuration files to use `tsconfig.json`. For example, update the start of `jest.config.js` ...

```javascript
module.exports = {
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json'
		}
	}, // ...
```

**Remove** any other old linting or tsconfig files and refernces to them, for example a `config` folder containing `tsconfig...` files. These are no longer required.
