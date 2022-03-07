// 어느정도 방법은 구상했지만, 코드를 짜는데에 실패하여
// 구글링을 통해 코드를 보면서 pow라는 거듭제곱을 시키는 함수를 알게되었고 천천히 하나씩 하면 될것 같다.

let dartResult = "1S*2T*3S";

// 첫번째 답
let temp = 0;
let answer = [];
let sum = 0;

for (let i = 0; i < dartResult.length; i++) {
  // 반복문을 사용하여 문자의 길이만큼 반복
  if (dartResult[i] >= 0 && dartResult[i] <= 9) {
    // 만약 문자가 0-9일경우
    if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
      // 다음숫자가 0인지 한번 더 검사
      temp = 10; // 맞을 시 temp에 10을 추가 후 다음으로 넘어감
      i++;
    } else {
      // 아닐시 그대로 저장
      temp = dartResult[i];
    }
    // 만약 S, D ,T 일경우 해당값을 pow를 사용하여 제곱해주거나 그대로 넣는다.
  } else if (dartResult[i] === "S") {
    answer.push(temp);
  } else if (dartResult[i] === "D") {
    answer.push(Math.pow(temp, 2));
  } else if (dartResult[i] === "T") {
    answer.push(Math.pow(temp, 3));
  }
  // 만약 # 또는 * 일경우 직전값에 -1을 곱해주거나, 직전값과 그 전값을 2배로 만들어준다.
  else if (dartResult[i] == "#") {
    answer[answer.length - 1] *= -1;
  } else if (dartResult[i] == "*") {
    answer[answer.length - 1] *= 2;
    answer[answer.length - 2] *= 2;
  }
}

// 그후 push된 값들을  모두 숫자로 바꿔서 sum에 추가한다.
for (let j = 0; j < answer.length; j++) {
  sum += Number(answer[j]);
}
console.log(sum);

// 두번째 답
let answer = 0;
let scoreArray = [];
let score = "";

dartResultLength = dartResult.length;

for (let i = 0; i < dartResultLength; i++) {
  const currentResult = dartResult[i];

  if (currentResult === "S") {
    scoreArray.push(parseInt(score));
    score = "";
  } else if (currentResult === "D") {
    scoreArray.push(parseInt(score) ** 2);
    score = "";
  } else if (currentResult === "T") {
    scoreArray.push(parseInt(score) ** 3);
    score = "";
  } else if (currentResult === "*") {
    scoreArrayLength = scoreArray.length;
    if (scoreArrayLength === 1) {
      scoreArray[0] *= 2;
    } else if (scoreArrayLength > 1) {
      scoreArray[scoreArrayLength - 1] *= 2;
      scoreArray[scoreArrayLength - 2] *= 2;
    }
  } else if (currentResult === "#") {
    scoreArray[scoreArray.length - 1] *= -1;
  } else {
    score += currentResult;
  }
}

answer = scoreArray.reduce((prev, curr) => prev + curr, 0);
console.log(answer);
