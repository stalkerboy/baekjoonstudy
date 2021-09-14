var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");
// let b = require("fs").readFileSync("dev/stdin");

for (let i = 1; i < b.length; i++) {
  const N = Number(b[i]);

  const div2N = Number.parseInt(N / 2);

  for (let j = div2N; j > 0; j--) {
    if (isSosu(j) && isSosu(N - j)) {
      console.log(j, N - j);
      break;
    }
  }
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
