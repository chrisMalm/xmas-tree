const input = require("./input.js");
let basement = -1;
let sum = 0;
let ar = input.split("");

console.log(sum);
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === "(") {
    sum++;
  } else {
    sum--;
  }
  if (sum === basement) {
    console.log([i]);
    return ar[i];
  }
  console.log(sum);
}
return sum;

console.log(input);
