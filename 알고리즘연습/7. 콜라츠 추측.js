let n = 16;
let answer = 0;

while (n != 1 && answer <= 500) {
  // n이 1이아니면서 작업이 500회 이하까지 반복
  if (n % 2 === 0) {
    // 조건문을 사용하여 입력 숫자가 짝수 이면
    n = n / 2; // 2로 나눈다.
  } else {
    // 홀수라면
    n = n * 3 + 1; // 3을 곱하고 1을 더한다.
  }
  answer++; // 작업횟수를 1회 추가한다.
}

if (answer >= 500) {
  // 작업을 500회를 넘어가면
  return -1; // -1을 리턴한다.
}

console.log(answer);
