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
  // 큰 배열에서의 하나하나 요소를 나눈다.
  let newArr = [];
  for (let j = 0; j < arr1[i].length; j++) {
    // 나눈 배열들을 다시 나누어 반복 실행
    newArr.push(arr1[i][j] + arr2[i][j]); // 나눈것들을 하나하나 덧셈하여 새로운 배열에 추가한다.
  }
  answer.push(newArr); // 새롭게 추가된 배열을 최종 배열에 추가한다.
}
console.log(answer);
