const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// .map((num) => parseInt(num));

const str = String(input);

const sorted = Array.from(str)
  .sort((a, b) => b - a)
  .reduce((pv, cv) => pv + cv, []);

console.log(sorted);
