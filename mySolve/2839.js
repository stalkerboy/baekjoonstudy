let input = require("fs").readFileSync("dev/stdin");

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }

  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}

function my1(b) {
  let result = -1;
  if (b % 5 == 0) result = b / 5;
  else {
    let i = 1;
    quotient3 = parseInt(b / 3);

    while (i <= quotient3) {
      b -= 3;
      if (b % 5 == 0) {
        result = i + b / 5;
        break;
      } else {
        i++;
      }
      result = -1;
    }
  }
  return result;
}
