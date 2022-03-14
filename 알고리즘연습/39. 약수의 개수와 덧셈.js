var left = 13;
var right = 17;
var result = 0;

// left 부터 right까지의 덧셈을 반복문으로 실행
for (let i = left; i <= right; i++) {
  // 약수의 개수를 구하기 위해 임의의 배열을 생성
  var arr = [];
  // 약수 구하는방법 ex)left 13일때 약수를 구하기위해 반복문 실행
  // 1부터 13까지 반복문을 실행
  for (let j = 1; j <= i; j++) {
    //만약 딱 떨어지는 약수가 있다면
    if (i % j === 0) {
      //배열에 추가
      arr.push(j);
    }
  }
  // 만약 배열의 길이가 짝수이면
  if (arr.length % 2 === 0) {
    //그 수를 양수로 더한다.
    result += i;
  }
  // 배열의 길이가 홀수이면
  else {
    // 그 수를 음수로 더한다.
    result -= i;
  }
}
console.log(result);
