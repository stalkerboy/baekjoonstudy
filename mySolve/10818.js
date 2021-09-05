var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split('\n');


const b = String(input[1]).split(' ')
let min, max;
min = max = parseInt(b[0]);
for(let i=1 ; i<b.length; i++){
    if(b[i] < min) min = parseInt(b[i]);
    if(b[i] > max) max = parseInt(b[i]);
}


console.log(min + ' ' + max)