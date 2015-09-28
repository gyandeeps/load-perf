/**
 * @fileoverview Module for the child process to run
 * @author Gyandeep Singh
 */

"use strict";

var Tick = require("./tick");

var tick = new Tick(process.argv[2]);
tick.start();
try{
    var a = require(process.argv[2]);
    tick.stop();
    console.log(tick.getDiff());
}
catch(e){ // this for scenario where modules cant be required
    tick.stop();
    console.log(-1);
}
