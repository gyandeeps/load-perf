var exec = require("child_process").execSync;

var x = exec("node ./loader.js eslint", {encoding: "utf8"});

console.log(x);