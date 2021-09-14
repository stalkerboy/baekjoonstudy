var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (b < 45) {
  if (a == 0) a = 24;
  a--;
  b = b + 60;
}
b = b - 45;
console.log(`%d %d`, a, b);
