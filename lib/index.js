/**
 * @fileoverview Main file
 * @author Gyandeep Singh
 */

"use strict";

var execSync = require("child_process").execSync;
var path = require("path");
var loaderPath = path.resolve(__dirname, "loader.js");
var execString = "node " + loaderPath + " ";

/**
 * Main function which calculates the times for each modules
 * @param options
 * @return {{moduleTimes: {dependencies: {}, devDependencies: {}}, loadTime: *}}
 */
function check(options){
    var packageJson = require(path.resolve(process.cwd(), options.package));
    var checkDevDependencies = !!options.checkDevDependencies;
    var moduleTimes = {
        dependencies: {},
        devDependencies: {}
    };
    var loadTime = -1;

    if(packageJson.main){
        loadTime = execSync(execString + path.resolve(process.cwd(), packageJson.main), {encoding: "utf8"});
    }

    Object.keys(packageJson.dependencies).forEach(function(depen){
        var time = execSync(execString + depen, {encoding: "utf8"});

        moduleTimes.dependencies[depen] = parseFloat(time);
    });

    if(checkDevDependencies){
        Object.keys(packageJson.devDependencies).forEach(function(depen){
            var time = execSync(execString + depen, {encoding : "utf8"});

            moduleTimes.devDependencies[depen] = parseFloat(time);
        });
    }

    return {
        moduleTimes: moduleTimes,
        loadTime: loadTime
    };
}

module.exports = check;
