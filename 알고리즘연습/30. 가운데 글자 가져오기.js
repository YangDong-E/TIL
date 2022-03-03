let s = "abcd";

let answer = "";
if (s.length % 2 === 0) {
  // s의 길이가 짝수일경우
  answer = s[s.length / 2 - 1] + s[s.length / 2]; // s의 길이를 반을 나눈뒤 앞의 숫자와 s의 반을나눈 두 인덱스의 값을 가져와 answer에 넣는다.
} else {
  answer = s[(s.length - 1) / 2]; // 홀수 일경우 먼저 길이에서 -1을 하여 짝수로 만든뒤 반을 나눈 인덱스의 번호를 가져온다.
}

console.log(answer);
