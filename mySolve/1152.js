var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");

let b = String(input[0]);
if (b[0] == " ") b = b.substr(1);
if (b[b.length - 1] == " ") b = b.substr(0, b.length - 1);

if (b.length == 0) return console.log(0);
console.log(b.split(" ").length);
