let s = "a1234";

let answer = parseInt(s); // 숫자로 변환 -> 변환이 안되면 NaN으로 반환이 된다.

if ((s.length === 4 || s.length === 6) && s == answer) {
  // 문제에서 나온 길이가 4이거나 6, 그리고 숫자만 이라는 조건문
  // s === answer가 아닌 s == answer를 사용한 이유는 === 의 답은 값과 자료형을 모두 비교하기때문에 항상 아닌 답이 나오는데
  //==를 사용하므로써 값만 비교하여 자료형에 구분을 없애서 정확한 답이 나온다.
  answer = true;
} else {
  answer = false;
}

console.log(answer);
