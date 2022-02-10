const n = [5, 3];
const a = Number(n[0]),
  b = Number(n[1]);
for (let i = 0; i < b; i++) {
  // 반복문을 통하여 세로줄(몇줄을 반복 실행 할지) 결정
  let star = ""; // 출력 할 변수
  for (let j = 0; j < a; j++) {
    // 한줄에 몇번 반복하여 * 표시를 할지 결정
    star = star + "*"; // * 찍기
  }
  console.log(star);
}
