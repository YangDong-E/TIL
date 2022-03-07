// 이번 알고리즘 예제도 오래 고민끝에 막혀 구글링을 통하여 해결을 하였다.
// 알고리즘 공부를 진행하면서 항상 막히는 부분은 일반적인 알고리즘이 아닌 좀더 고급수준의 알고리즘에서 자주 막히는것같다.
// 이러한 부분들을 집중적으로 공부해야 할것같다.
let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

let answer = [];

for (let i = 0; i < n; i++) {
  const bin = (arr1[i] | arr2[i]).toString(2);
  let line = [];
  for (let j = bin.length - n; j < bin.length; j++) {
    if (bin[j] === "1") {
      line.push("#");
    } else {
      line.push(" ");
    }
  }
  answer.push(line.join(""));
}

console.log(answer);

// 도움 받은 곳
// https://velog.io/@pmk4236/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B9%84%EB%B0%80%EC%A7%80%EB%8F%84-Javascript
// 각 배열의 요소들을 arr의 길이만큼 반복하며,toString(2)를 사용하여 이진수로 변환하였다.
// 9와 같이 이진수로 변환했을때 자릿수(n)보다 부족할때 두번째 for문에서 j=bin.length-n 을하여 bin.length-n은 보통 0이되지만 9와 같은 네자리 이진수는 -1이 된다. 그리고 if문을 사용하여 변환을 해준다.
// join으로 형태에 맞게 담아준다.
