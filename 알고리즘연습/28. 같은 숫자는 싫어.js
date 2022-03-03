let arr = [4, 4, 4, 3, 3];
let answer = [];

for (let i = 0; i < arr.length; i++) {
  // 반복문을 통하여 배열의 모든 요소를 돈다.
  if (arr[i] !== arr[i + 1]) {
    // 만일 i 인덱스를 가진 요소와 다음 인덱스 요소가 다를시
    answer.push(arr[i]); // 배열에 추가한다.
  }
}

console.log(answer);
