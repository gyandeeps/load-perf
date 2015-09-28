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

## Output Example

All times are in `ms`.

```sh
$ load-perf
Dependencies:
chalk                  :   21.332987
concat-stream          :   16.36361
debug                  :   13.844468
doctrine               :   10.851406
escape-string-regexp   :   1.946993
escope                 :   67.604855
espree                 :   17.298621
estraverse             :   3.452687
estraverse-fb          :   8.504899
glob                   :   18.858194
globals                :   3.553849
handlebars             :   62.334192
inquirer               :   101.852429
file-entry-cache       :   1.86819
is-my-json-valid       :   9.402158
is-resolvable          :   2.927087
js-yaml                :   47.601996
lodash.clonedeep       :   20.422166
lodash.merge           :   25.618057
lodash.omit            :   23.293907
minimatch              :   6.914903
mkdirp                 :   1.686758
object-assign          :   1.593661
optionator             :   27.581543
path-is-absolute       :   1.661102
path-is-inside         :   1.762264
shelljs                :   37.127746
strip-json-comments    :   1.587796
text-table             :   1.437153
to-double-quotes       :   1.988777
to-single-quotes       :   1.725977
user-home              :   1.437153
xml-escape             :   1.249491

Module load time: 278.161939
```
