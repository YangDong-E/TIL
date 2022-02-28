let a = 5;
let b = 3;

let sum = 0;

if (a >= b) {
  // a가 b 보다 크거나 같을때
  for (let i = b; i <= a; i++) {
    // b(작은수)부터 반복문시작 a까지 1씩증가
    sum += i; // 요소를 모두 더한값을 sum에 넣는다.
  }
} else {
  // a가 b보다 작을때
  for (let j = a; j <= b; j++) {
    // a(작은수)부터 반복문시작 b까지 1씩증가
    sum += j; // 요소를 모두 더한값을 sum에 넣는다.
  }
}

console.log(sum);
