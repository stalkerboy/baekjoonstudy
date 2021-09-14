var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");
// let b = require("fs").readFileSync("dev/stdin");

// const pi = 3.141593;
const c = b[0].split(" ").map((n) => parseInt(n));
const [N, M] = [c[0], c[1]];

let arr = b[1].split(" ").map((n) => parseInt(n));

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let z = j + 1; z < N; z++) {
      if (arr[i] + arr[j] + arr[z] > max && arr[i] + arr[j] + arr[z] <= M)
        max = arr[i] + arr[j] + arr[z];
    }
  }
}
console.log(max);
