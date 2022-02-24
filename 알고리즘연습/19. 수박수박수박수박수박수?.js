let n = 3;
let answer = "";

for (let i = 1; i <= n; i++) {
  //i를 1부터 n까지 반복
  if (i % 2 === 0) {
    //i가 짝수일경우 박을 추가
    answer += "박";
  } else {
    // i가 홀수일경우 수를 추가
    answer += "수";
  }
}

console.log(answer);
