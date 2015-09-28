[![NPM version](https://badge.fury.io/js/load-perf.svg)](http://badge.fury.io/js/load-perf)
[![Build Status](https://travis-ci.org/gyandeeps/load-perf.svg?branch=master)](http://travis-ci.org/gyandeeps/load-perf)

load-perf
====================

## Idea

Main idea here is to measure the load(require) time for dependencies and devDependencies for your project or module. we also calculate the load(require) time of your module.
This give an idea about how much time would it take for your module to be required by the consumer.

Key points:

* Measure load performance of your module when its required
* Measure load performance of your dependencies
* Measure load performance of your devDependencies

## How to use

Just install the module

```sh
npm install load-perf -g
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
