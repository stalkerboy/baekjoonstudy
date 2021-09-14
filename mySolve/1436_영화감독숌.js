var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");
// let b = require("fs").readFileSync("dev/stdin");

const input = parseInt(b);
// console.log(input);
let i = 665;
let n = 0;
while (true) {
  if (String(i).includes("666")) {
    n++;
    if (n === input) {
      // console.log(i);
      break;
    }
  }
  i++;
}

console.log(i);
