const x = 2;
const n = 5;
const answer = [];

// 곱셈식 생각하면 쉽게 풀수 있다.
// ex) 2*1 , 2*2 , 2*3 ...
for (let i = 1; i <= n; i++) {
  // 0을 곱할시 0이 나오기 때문에 1부터 시작하며 n까지 반복해야하기때문에 이하 표시로 하였다.
  const m = x * i; // 곱셈식
  answer.push(m); // 배열에 추가
}
console.log(answer);
