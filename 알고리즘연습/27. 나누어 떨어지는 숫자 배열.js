let arr = [3, 6, 9];
let divisor = 10;

let answer = [];

for (let i = 0; i < arr.length; i++) {
  // 반복문을 사용하여 arr의 요소만큼 반복
  if (arr[i] % divisor === 0) {
    // 조건문 요소와 divisor 나머지가 남지않는 요소는
    answer.push(arr[i]); // answer배열에 추가
  }
}
if (answer.length === 0) {
  // 배열에 아무 요소도 없을경우
  answer.push(-1); // -1을 배열에 추가
}
console.log(answer.sort((a, b) => a - b)); // 정렬을 해서 출력
