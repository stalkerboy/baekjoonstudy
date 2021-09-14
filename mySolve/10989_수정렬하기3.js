// var fs = require("fs");
// var b = fs.readFileSync("dev/stdin").toString().split("\n").splice(1);
// let b = require("fs").readFileSync("dev/stdin");
require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .splice(1)
  .map((n) => parseInt(n))
  .sort((a, b) => a - b)
  .map((n) => console.log(n));

// const arr = b
//   .map((n) => parseInt(n))
//   .sort((a, b) => a - b)
//   .map((n) => console.log(n));

// arr.map(n=>);
