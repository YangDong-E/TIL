let num = 13;
let answer = true;
let S = num
  .toString()
  .split("")
  .map((num) => Number(num))
  .reduce((a, b) => a + b);

if (num % S === 0) {
  answer = true;
} else {
  answer = false;
}

console.log(typeof S);
console.log(answer);
