/**
 * @fileoverview Options configuration for optionator.
 * @author Gyandeep Singh
 */
"use strict";

var optionator = require("optionator");

module.exports = optionator({
    prepend: "load-perf [options]",
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true,
    options: [
        {
            heading: "Options"
        },
        {
            option: "help",
            alias: "h",
            type: "Boolean",
            description: "Show help."
        },
        {
            option: "version",
            alias: "v",
            type: "Boolean",
            description: "Outputs the version number."
        },
        {
            option: "package",
            alias: "p",
            type: "path::String",
            default: "./package.json",
            description: "Package json file path."
        },
        {
            option: "checkDevDependencies",
            alias: "d",
            type: "Boolean",
            default: "false",
            description: "Perf calculation for devDependencies."
        },
        {
            option: "checkDependencies",
            type: "Boolean",
            default: "true",
            description: "Perf calculation for dependencies."
        }
    ]
});
