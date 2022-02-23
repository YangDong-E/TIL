let n = 12;
let answer = [];

for (let i = 0; i <= n; i++) {
  // 반복문 사용
  if (n % i === 0) {
    // 약수는 나머지가 없는 수이기 때문에 i가 0부터 증가하면서 나머지가 남지않는 수를
    answer.push(i); // 배열에 추가한다.
  }
}

let result = answer.reduce((a, b) => a + b, 0); // reduce함수를 사용하여 배열의 요소를 모두 더한다. 마지막 0은 시작숫자

console.log(result);
