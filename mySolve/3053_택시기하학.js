var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");
// let b = require("fs").readFileSync("dev/stdin");

// const pi = 3.141593;

b = parseInt(b);
console.log(b * b * Math.PI);

console.log(b * b * 2);

//1385.442360 442513
