// For submit

const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

// For local test
// const input = [5, 1, 3, 8, -2, 2];
// const input = [1, 4000];
// const input = [5, -1, -2, -3, -1, -2];
const N = input.shift();
const sortedNumArr = input.sort((a, b) => a - b);
const numMap = {};

for (let num of sortedNumArr) {
  if (numMap[num]) {
    numMap[num] = numMap[num] + 1;
  } else {
    numMap[num] = 1;
  }
}

let hitMaxNum = Math.max.apply(null, Object.values(numMap));
let hitMaxNumArr = [];
let hitMaxNumResult = 0;
for (let numKey in numMap) {
  if (numMap[numKey] === hitMaxNum) {
    hitMaxNumArr.push(numKey);
  }
}

if (hitMaxNumArr.length > 1) {
  hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
  hitMaxNumResult = hitMaxNumArr[1];
} else {
  hitMaxNumResult = hitMaxNumArr[0];
}

const avg = Math.round(input.reduce((acc, num) => acc + num, 0) / N);
const center = input[Math.floor(input.length / 2)];
const maxSubMin = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

console.log(avg);
console.log(center);
console.log(hitMaxNumResult);
console.log(maxSubMin);
