var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split(" ");
// let b = require("fs").readFileSync("dev/stdin");

let M = Number(b[0]);
let N = Number(b[1]);

for (let i = M; i <= N; i++) {
  if (isSosu(i)) console.log(i);
}

function isSosu(x) {
  let i = 2;
  if (x == 2 || x == 3) return true;
  if (x % 2 == 0) return false;
  if (x % 3 == 0) return false;

  let max = Math.floor(Math.sqrt(x));
  if (x % max == 0) return false;
  // console.log(i, max);
  while (i < max) {
    if (x % i == 0) return false;
    i++;
  }
  // return true;
  if (x == 1) {
    return false;
  } else return true;
}
