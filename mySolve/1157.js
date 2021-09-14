var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().split("\n");

const b = String(input[0]);

alphabetCount = Array(26).fill(0);

Array.from(b)
  .map((c) => {
    if (c.charCodeAt() >= 97) return c.charCodeAt() - 97;
    else return c.charCodeAt() - 65;
  })
  .map((c) => alphabetCount[c]++);

maxCount = Math.max(...alphabetCount);
// maxIndex = -1;

// for (let i = 0; i < alphabetCount.length; i++) {
//   if (alphabetCount[i] == maxCount) {
//     if (maxIndex > -1) {
//       console.log("?");
//       return;
//     }
//     maxIndex = i;
//   }
// }

// console.log(String.fromCharCode(maxIndex + 65));
if (alphabetCount.indexOf(maxCount) != alphabetCount.lastIndexOf(maxCount)) {
  console.log("?");
} else {
  console.log(String.fromCharCode(alphabetCount.indexOf(maxCount) + 65));
}
