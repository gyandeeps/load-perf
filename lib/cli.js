/**
 * @fileoverview Main cli object
 * @author Gyandeep Singh
 */

"use strict";

var optionator = require("./options");
var loadPerf = require("./index");
var chalk = require("chalk");
var table = require("text-table");

/**
 * Prints the results of the run to the console
 * @param {object} results - Results object from main
 * @returns {void}
 */
function printResults(results){
    var output = "";
    var dependenciesTimes = [];
    var devDependenciesTimes = [];

    dependenciesTimes = Object.keys(results.moduleTimes.dependencies).map(function(depen){
        var val = results.moduleTimes.dependencies[depen];

        return [
            chalk.gray(depen),
            " : ",
            chalk.white(val === -1 ? "Cannot be required" : val)
        ];
    });

    devDependenciesTimes = Object.keys(results.moduleTimes.devDependencies).map(function(depen){
        var val = results.moduleTimes.devDependencies[depen];

        return [
            chalk.gray(depen),
            " : ",
            chalk.white(val === -1 ? "Cannot be required" : val)
        ];
    });

    output += chalk.white("Dependencies: \n");
    output += table(dependenciesTimes, { align: ["l", "l"]});

    if(devDependenciesTimes.length > 0){
        output += chalk.white("\n\nDevDependencies: \n");
        output += table(devDependenciesTimes, {align : ["l", "l"]});
    }

    output += chalk.white("\n\nModule load time: " + (results.loadTime === -1 ? "Cannot be required" : results.loadTime));
    console.log(output);
}

/**
 * Executes the grouch based on the options passed in.
 * @param {string|Array|Object} args - The arguments to process.
 * @returns {void}
 */
function execute(args){
    var options = optionator.parse(args);

    if(options.help){
        console.log(optionator.generateHelp());
    }
    else if(options.version){
        console.log("v" + require("../package.json").version);
    }
    else{
        printResults(loadPerf(options));
    }
}

module.exports.execute = execute;
