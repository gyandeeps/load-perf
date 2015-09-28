/**
 * @fileoverview Constructor of tick
 * @author Gyandeep Singh
 */

"use strict";

/**
 * Constructor of tick.
 * @param name The name of this tick.
 * @returns {Tick}
 * @constructor
 */
function Tick(name) {
    this.name = name;
    return this;
}

Tick.wrap = function(name, callback){
    if (typeof name === "function") {
        callback = name;
        name = functionName(callback);
    }

    if(name === ""){
        name = "anon";
    }

    var tick = new Tick(name);
    tick.start();

    var done = function(){
        tick.stop();
    };

    callback(done);

    return tick;
};

/**
 * Starts the tick.
 */
Tick.prototype.start = function(){
    this.hrstart = process.hrtime();
};

/**
 * Ends the tick.
 */
Tick.prototype.stop = function(){
    this.hrend = process.hrtime(this.hrstart);
};

/**
 * Get the duration of the tick.
 * @returns Long nanoseconds
 */
Tick.prototype.getDiff = function(){
    return (this.hrend[0] * 1e9 + this.hrend[1])/ 1000000;
};

module.exports = Tick;
