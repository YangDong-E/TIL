let price = 3;
let money = 20;
let count = 4;
let result = 0;

for (let i = 1; i <= count; i++) {
  // 카운트 만큼 반복 실행
  money = money - price * i;
  // 잔액은 잔액에서 금액에횟수를 곱한 수를 뺀다.
}
if (money < 0) {
  // 잔액이 음수로 갔을땐
  result = -money;
  // -를 한번 더 붙여서 ex) -(-10) -> 10 으로 바꿔준다.
} else {
  // 양수일땐 0 즉,금액이 딱 맞을때 0
  result = 0;
}
console.log(result);
