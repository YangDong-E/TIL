let n = 10;

for (let i = 2; i < n; i++) {
  // i가 1이면 나머지가 항상 0이 되기때문에 2부터시작
  if (n % i === 1) {
    // 나머지가 1인 숫자를 찾는다.
    console.log(i);
  }
}
