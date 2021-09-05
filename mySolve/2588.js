var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = String(input[1]);


Array.from(b).reverse().map(c=>console.log(a*c))
console.log(a*b)