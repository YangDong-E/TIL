var a = [1, 2, 3, 4];
var b = [-3, -1, 0, 2];
let answer = 0;

// a와 b의 길이는 같으므로 한 배열의 길이만큼 i가 증가한다(인덱스)
for (let i = 0; i < a.length; i++) {
  // answer에 같은인덱스의 위치를 곱한값을 더해준다.
  answer += a[i] * b[i];
}

console.log(answer);
