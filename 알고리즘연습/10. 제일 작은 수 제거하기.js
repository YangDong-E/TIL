let arr = [4, 3, 2, 1];
let answer = [];
let min = Math.min.apply(null, arr); // 최소값을 구하는데 apply를 사용하여 단일 배열로 받는다.

for (let i of arr) {
  // arr요소 만큼 반복하는데
  if (arr.length === 1) {
    // 배열의 길이가 1이면 무조건 -1을 출력
    answer.push(-1);
  } else if (i !== min) {
    // 최소값과 일치하지 않을경우
    answer.push(i); // 배열에 추가
  }
  console.log(answer);
}
