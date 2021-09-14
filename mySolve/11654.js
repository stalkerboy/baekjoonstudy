var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");

const b = String(input[0]);

console.log(b.charCodeAt());
