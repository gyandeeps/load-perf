/* global target, find, echo, exec, exit */

"use strict";

require("shelljs/make");

/* eslint-disable vars-on-top */
var nodeCli = require("shelljs-nodecli");
//var jsTestFiles = find("tests/").filter(fileType("js")).join(" ");
var nodeModules = "./node_modules/";
var mocha = nodeModules + "mocha/bin/_mocha ";
var path = require("path");

/* eslint-enable vars-on-top */

/**
 * Generates a function that matches files with a particular extension.
 * @param {string} extension The file extension (i.e. "js")
 * @returns {function} The function to pass into a filter method.
 * @private
 */
function fileType(extension){
    return function(filename){
        return filename.substring(filename.lastIndexOf(".") + 1) === extension;
    };
}

function release(type){
    exec("echo Running tests");
    //target.test();

    exec("echo Bumping up the version");
    exec("npm version " + type);

    exec("echo Commiting master with tags");
    exec("git push origin master --tags");

    exec("echo Publish on NPM");
    exec("npm publish");

    exec("echo Operation done.");
}

target.test = function(){
    var errors = 0;
    var lastRun;

    target.lint();

    echo("Running Mocha tests");
    lastRun = nodeCli.exec("istanbul", "cover", " --report lcov --report cobertura", mocha, "-- -t 10000 --reporter landing -c", jsTestFiles);
    if(lastRun.code !== 0){
        errors++;
    }

    lastRun = nodeCli.exec("istanbul", "check-coverage", "--statement 90 --branch 90 --function 90 --lines 90");
    if(lastRun.code !== 0){
        errors++;
    }

    if(errors){
        exit(1);
    }
};

target.lint = function(){
    var errors = 0;
    var lastRun;

    echo("Validating Makefile.js");
    lastRun = nodeCli.exec("eslint", "./Makefile.js");
    if(lastRun.code !== 0){
        errors++;
    }

    echo("Validating JavaScript files");
    lastRun = nodeCli.exec("eslint", "./lib");
    if(lastRun.code !== 0){
        errors++;
    }

    echo("Validating JavaScript test files");
    lastRun = nodeCli.exec("eslint", "./tests");
    if(lastRun.code !== 0){
        errors++;
    }

    if(errors){
        exit(1);
    }
};

target.patch = function(){
    release("patch");
};

target.minor = function(){
    release("minor");
};

target.major = function(){
    release("major");
};
