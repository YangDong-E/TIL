let arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  let avg = sum / arr.length;
  console.log(avg);
}
