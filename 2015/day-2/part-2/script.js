const input = require("./input.js");
let ar = input.split("\n").map(x => x.split("x").map(y => Number(y)));
totalRibbon = 0;
for (let i = 0; i < ar.length; i++) {
  let length = ar[i][0];
  let width = ar[i][1];
  let height = ar[i][2];

  let ribbon1 = 2 * (height + width);
  let ribbon2 = 2 * (height + length);
  let ribbon3 = 2 * (width + length);

  let min = Math.min(ribbon1, ribbon2, ribbon3);
  totalRibbon += min;
  let ribbonBow = ar[i].reduce((a, b) => a * b);

  totalRibbon += ribbonBow;
}
