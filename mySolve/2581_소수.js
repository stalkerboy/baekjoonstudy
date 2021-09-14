var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");

let M = Number(b[0]);
let N = Number(b[1]);

let sosuArr = [];
for (let i = M; i <= N; i++) {
  if (isSosu(i)) sosuArr.push(i);
}

// console.log(M, N, sosuArr);

if (sosuArr.length > 0) {
  console.log(sosuArr.reduce((p, c) => p + c));
  console.log(sosuArr[0]);
} else {
  console.log(-1);
}

function isSosu(x) {
  let i = 2;
  while (i < x) {
    if (x % i == 0) return false;
    i++;
  }
  // return true;
  if (x == 1) {
    return false;
  } else return true;
}
