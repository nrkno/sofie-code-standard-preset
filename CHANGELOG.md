# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.4.2...v0.5.0) (2021-11-01)


### ⚠ BREAKING CHANGES

* re-add a newer version of husky as it doesn't autoinstall now
* remove husky as a dependency, as if installed it cannot be disabled which can cause problems

### Features

* re-add a newer version of husky as it doesn't autoinstall now ([e3699b5](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/e3699b52cda512cfc115a13ab0cd00d46fcec0af))
* remove husky as a dependency, as if installed it cannot be disabled which can cause problems ([44138b2](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/44138b2c9fad4f3e330173f606fad20ab4f0c304))
* update eslint to v8 ([dc4a44a](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/dc4a44adb7800b4a885a7d4bfc4034b387aa576a))

### [0.4.2](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.4.1...v0.4.2) (2021-06-17)


### Bug Fixes

* allow variables whose name starts with an _ ([561cd20](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/561cd205da88a86255f16ff4853deeba7c85a780))

### [0.4.1](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.4.0...v0.4.1) (2021-05-28)


### Bug Fixes

* add more keywords to blocked comments ([0f7dabc](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/0f7dabc05e501136dda2c5c55a4a69de2b733b9d))

## [0.4.0](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.3.0...v0.4.0) (2021-05-28)


### Features

* add jest plugin and nocommit rule ([1d9eee8](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/1d9eee84f7e1d2a5da91758306335cdf9424c19f))
* update typescript dependency ([6e4c5c1](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/6e4c5c1da51ad882908d8a662959ba64ee11604a))

## [0.3.0](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.2.5...v0.3.0) (2021-05-14)


### ⚠ BREAKING CHANGES

* update license checker script to esm

### Features

* github actions ([35a5f4b](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/35a5f4b8929cac12b9fbf34e605690fb3836b229))
* update license checker script to esm ([d07d311](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/d07d311a500fc88064f7c882f3370af58511da41))

### [0.2.5](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.2.4...v0.2.5) (2021-04-28)


### Features

* allow Artistic-2.0 as it is MIT compatible ([b490bd3](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/b490bd3e1d0ca51f20539b32d8d357b756cc0547))

### [0.2.4](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.2.3...v0.2.4) (2021-02-19)


### Features

* add rule @typescript-eslint/no-floating-promises ([#7](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/issues/7)) ([eec181a](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/eec181a9fed7b5b5c38a4fc22b15ca6ec1c04ad4))

### [0.2.3](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.2.2...v0.2.3) (2021-02-05)

### [0.2.2](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.2.1...v0.2.2) (2021-01-12)


### Bug Fixes

* '.d.ts' is a valid extension to include from ts files ([f88345e](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/f88345efd55e417ab584257f88cef92ff8f86a61))

### [0.2.1](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/compare/v0.2.0...v0.2.1) (2020-12-14)


### Features

* add option to ignore certain packages which are false positives [publish] ([be171ca](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/be171caeca7bb93213f16ffba05bb4214ebfa741))

## 0.2.0 (2020-11-16)


### Features

* eslint: turn off no-use-before-define ([33888b9](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/33888b9440b7c0d1dfc6c61ca04b1df3f8698bde))
* initial commit ([f9b276a](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/f9b276aca44df4d7681c85f6304db9520f43a567))
* update prettierrc ([5fc0e03](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/5fc0e036e699ea3fcf529aa0f1818ad11d79952b))


### Bug Fixes

* [publish] don't need to re-expose the binaries ([bdea359](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/bdea35987bf700fe78a2627eaec5e75b71d5d021))
* add back a wrapper script to abstract the checker lib from library consumers [publish] ([a6acca8](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/a6acca8c64be8b368e1ec3fdbfd884fdf5d69aeb))
* ignore the package it is being run for, and add command to output a full report [publish] ([e818db8](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/e818db8d32e9ded130715f4bb9862bf8f45aca27))
* node 10 minimum + TS 4.0 + readme ([ae6db75](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/ae6db754fc5d1364f958badc4dfdf32da238e6b8))
* prettier eslint config ([57b2f9f](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/57b2f9fe4f576b1b1095279048d748becef94ba0))
* remove typescript rules for js files ([67becbb](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/67becbb96be13844baa5c5f0bddb6f2987374033))
* some js linting ([301818c](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/301818cac8021dd251ebb6a724d1d3b33cff3051))
* suggested updates to readme based on some experience ([b6a8b7e](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/b6a8b7e2a68ff7937633129392dc6dea3312f668))
* use license-checker instead of legally ([f1a59ac](https://github.com/nrkno/tv-automation-sofie-code-standard-preset/commit/f1a59acce97dc57b0a419c8153dfc56ab91f3205))
