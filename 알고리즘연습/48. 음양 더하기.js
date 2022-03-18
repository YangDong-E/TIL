var absolutes = [4, 7, 12];
var signs = [true, false, true];
let answer = 0;

// absolutes와 signs의 길이는 같으므로 한 배열의 길이만큼 반복한다.
for (let i = 0; i < absolutes.length; i++) {
  // 만약 signs의 요소가 true이면
  if (signs[i] === true) {
    // answer에 absolutes의 값을 더해준다.
    answer += absolutes[i];
  }
  // true가 아닐시
  else {
    // absolutes를 빼준다.
    answer -= absolutes[i];
  }
}

console.log(answer);
