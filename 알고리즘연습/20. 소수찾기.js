// 소수찾기를 생각하던 도중 구글링을 하여 도움을 받아 에라토스테네스의 체라는 방법을 사용해보았다.
// 다음에 다시 풀어볼때는 다른 방법도 있는지 생각을 해보아야겠다.

let n = 10;
let answer = 0;
let arr = new Array(n + 1).fill(true); //fill()을 사용하여 모두 true로 바꾼다.

for (let i = 2; i <= n; i++) {
  // 이미 소수가 아닌 인덱스는 건너뛴다.
  if (arr[i] === false) {
    continue;
  }
  // 배수는 소수가 아니라 0으로 설정
  for (let k = i * 2; k <= n; k += i) {
    arr[k] = false;
  }
}
// 소수의 갯수를 구한다.
for (let i = 2; i <= n; i++) {
  if (arr[i] === true) {
    answer++;
  }
}

console.log(answer);
