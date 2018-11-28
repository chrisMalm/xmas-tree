const input = require("./input.js");

let ar = input.split("\n").map(x => x.split("x").map(y => Number(y)));

let finalTotal = 0;

for (let i = 0; i < ar.length; i++) {
  let length = ar[i][0];
  let width = ar[i][1];
  let height = ar[i][2];
  let area1 = 2 * length * width;
  let area2 = 2 * width * height;
  let area3 = 2 * height * length;
  let min = Math.min(area1, area2, area3) / 2;

  finalTotal += area1 + area2 + area3 + min;
}

console.log(finalTotal);
