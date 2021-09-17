const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// .map((num) => parseInt(num));

const arr = [];
for (let i = 1; i < input.length; i++) {
  input[i].split(" ").map((num) => arr.push(parseInt(num)));
  // arr.push(input[i].split(" ").map((num) => parseInt(num)));
}

const result = countPaper(arr);
console.log(result[0]);
console.log(result[1]);

function countPaper(arr) {
  let whiteCount = 0;
  let blueCount = 0;

  let oneColor = true;
  for (val of arr) {
    if (arr[0] !== val) {
      oneColor = false;
      break;
    }
  }

  if (oneColor) {
    if (arr[0] == 1) return [0, 1];
    else return [1, 0];
  }

  if (arr.length == 4) {
    for (let val of arr) {
      if (val == 1) blueCount++;
      else whiteCount++;
    }
    return [whiteCount, blueCount];
  }

  part = Array(4);
  part[0] = [];
  part[1] = [];
  part[2] = [];
  part[3] = [];

  const al = Math.sqrt(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const r = parseInt(i / al);
    const c = i - r * al;
    // console.log(r, c, i);
    // if (r < al / 2) {
    //   if (c < al / 2) {
    //     console.log(i, arr[i]);
    //     console.log(part[0]);
    //     part[0].push(arr[i]);
    //     console.log(part[0]);
    //   } else {
    //     part[1].push(arr[i]);
    //   }
    // }
    if (r < al / 2) {
      if (c < al / 2) {
        part[0].push(arr[i]);
      } else {
        part[1].push(arr[i]);
      }
    } else {
      if (c < al / 2) {
        part[2].push(arr[i]);
      } else {
        part[3].push(arr[i]);
      }
    }
  }
  // console.log(part);
  const result = part
    .map((p) => countPaper(p))
    .reduce((pv, cv) => [pv[0] + cv[0], pv[1] + cv[1]]);

  return [whiteCount + result[0], blueCount + result[1]];
}
