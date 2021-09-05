var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split('\n');


var a = String(input[0]).split(' ')
x = a[1]
var b = String(input[1]).split(' ')

result = String(input[1]).split(' ').filter(c=>parseInt(c)<x)
.reduce((acc, cur, i)=>acc + ' ' + cur)
console.log(result)