var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");
// let b = require("fs").readFileSync("dev/stdin");

// let M = Number(b[0]);
// let N = Number(b[1]);

let count = 0;
let arr = [];
for (let i = 0; i < b.length - 1; i++) {
  const N = Number(b[i]);
  if (N == 0) break;
  for (let j = N + 1; j <= 2 * N; j++) {
    if (isSosu(j)) {
      arr.push(j);
      count++;
    }
  }
  console.log(count);
  // console.log(count, arr);
  // if (arr.length > 1000) console.log(arr[10185]);
  count = 0;
  arr = [];
}

function isSosu(x) {
  let i = 2;
  if (x == 2 || x == 3) return true;
  if (x % 2 == 0) return false;
  if (x % 3 == 0) return false;

  let max = Math.ceil(Math.sqrt(x));
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
