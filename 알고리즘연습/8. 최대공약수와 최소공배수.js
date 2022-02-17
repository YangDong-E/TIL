let n = 2;
let m = 5;
let answer = [];
let a = Math.max(n, m); // 입력 받은 두 값중 최대값
let b = Math.min(n, m); // 입력 받은 두 값중 최솟값
let r;
while (b > 0) {
  // 유클리드 호제법 나머지가 0이 될때 까지
  r = a % b; // r은 a 나누기 b의 나머지
  a = b; // a 는 b
  b = r; // b 는 나머지
}

answer.push(a); // 최대 공약수

answer.push((n * m) / a); // 최소 공배수 구하는 공식

console.log(answer); // 두 값을 넣은 배열
