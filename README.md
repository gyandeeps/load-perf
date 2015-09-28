[![NPM version](https://badge.fury.io/js/load-perf.svg)](http://badge.fury.io/js/load-perf)
[![Build Status](https://travis-ci.org/gyandeeps/load-perf.svg?branch=master)](http://travis-ci.org/gyandeeps/load-perf)

load-perf
====================

## Idea

Main idea here is to measure the load(require) time for dependencies and devDependencies for your project or module. we also calculate the load(require) time of your module also.

## How to use

Just install the module

```sh
npm install load-perf
```

Then just run the module on your project or module

```sh
load-perf
```

## Options

```sh
  -h, --help                  Show help.
  -v, --version               Outputs the version number.
  -p, --package path::String  Package json file path. - default: ./package.json
  -d, --checkDevDependencies  Perf calculation for devDependencies. - default: false
```
