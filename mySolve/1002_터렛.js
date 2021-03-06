var fs = require("fs");
var b = fs.readFileSync("dev/stdin").toString().split("\n");
// let b = require("fs").readFileSync("dev/stdin");

for (let i = 1; i < b.length; i++) {
  let c = b[i].split(" ").map((r) => parseInt(r));

  let [x1, y1, r1] = [c[0], c[1], c[2]];
  let [x2, y2, r2] = [c[3], c[4], c[5]];
  const dx = x1 - x2;
  const dy = y1 - y2;
  if (r1 > r2) {
    // r1 <= r2로 정의
    const temp = r1;
    r1 = r2;
    r2 = temp;
  }
  const rSum = (r1 + r2) * (r1 + r2);
  const rSub = (r2 - r1) * (r2 - r1);
  const d = dx * dx + dy * dy; // 중점 사이의 거리

  // 1. 원이 두 점에서 만나는 경우 (두 점)(r2 - r1 < d < r1 + r2)
  if (d < rSum && d > rSub) {
    console.log(2);
    // 2. 두 원이 외접하는 경우 (한 점)( d = r1 + r2)
    // 3. 두 원이 내접하는 경우 (한 점)( d = r2 - r1 && d != 0)
  } else if (d === rSum || (d === rSub && d !== 0)) {
    console.log(1);
    // 4. 하나의 원이 다른 원을 포함하는 경우 (못 만남)( d < r2 - r1 )
    // 5. 두 원이 멀리 떨어져 만나지 않는 경우 (못 만남)( d > r1 + r2 )
  } else if (d < rSub || d > rSum) {
    console.log(0);
    // 6. 두 원이 일치하는 경우 (무수히)( d = 0, r1 = r2 )
  } else if (d === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }

  // else console.log(minDis, Math.pow(r1 + r2, 2), 2);
}
