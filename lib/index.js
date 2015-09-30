/**
 * @fileoverview Main file
 * @author Gyandeep Singh
 */

"use strict";

var execSync = require("child_process").execSync;
var path = require("path");
var assign = require("object-assign");
var loaderPath = path.resolve(__dirname, "loader.js");
var execString = "node " + loaderPath + " ";
var defaultOptions = {
    package: "./package.json",
    checkDevDependencies: false,
    checkDependencies: true
};

/**
 * Main function which calculates the times for each modules
 * @param {object} suppliedOptions - Options to be passed in.
 * @return {{moduleTimes: {dependencies: {}, devDependencies: {}}, loadTime: int}}
 */
function check(suppliedOptions){
    var options = assign(Object.create(defaultOptions), suppliedOptions || {});
    var packageJson = require(path.resolve(process.cwd(), options.package));
    var checkDevDependencies = !!options.checkDevDependencies;
    var checkDependencies = !!options.checkDependencies;
    var moduleTimes = {
        dependencies: {},
        devDependencies: {}
    };
    var loadTime = -1;

    if(packageJson.main){
        loadTime = execSync(execString + path.resolve(process.cwd(), packageJson.main), {encoding: "utf8"});
    }

    if(checkDependencies){
        Object.keys(packageJson.dependencies).forEach(function(depen){
            var time = execSync(execString + path.resolve(process.cwd(), "node_modules", depen), {
                encoding: "utf8",
                cwd: process.cwd()
            });

            moduleTimes.dependencies[depen] = parseFloat(time);
        });
    }

    if(checkDevDependencies){
        Object.keys(packageJson.devDependencies).forEach(function(depen){
            var time = execSync(execString + path.resolve(process.cwd(), "node_modules", depen), {
                encoding: "utf8",
                cwd: process.cwd()
            });

            moduleTimes.devDependencies[depen] = parseFloat(time);
        });
    }

    return {
        moduleTimes: moduleTimes,
        loadTime: loadTime
    };
}

module.exports = check;
