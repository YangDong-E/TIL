const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];
const answer = [];

for (let i = 0; i < arr1.length; i++) {
  let newArr = [];
  for (let j = 0; j < arr1[i].length; j++) {
    newArr.push(arr1[i][j] + arr2[i][j]);
  }
  answer.push(newArr);
}
console.log(answer);
