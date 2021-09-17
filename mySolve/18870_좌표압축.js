const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// .map((num) => parseInt(num));

const inputArr = input[1].split(" ").map((num) => parseInt(num));

const inputDic = new Set(inputArr);

// arr.map((v) => inputDic[v] = );

// arr
const orderDic = {};
sorted = Array.from(inputDic.keys())
  .sort((a, b) => a - b)
  .map((v, i) => (orderDic[v] = i));

console.log(inputArr.map((v) => orderDic[v]).reduce((pv, cv) => pv + " " + cv));
// console.log(sorted);
