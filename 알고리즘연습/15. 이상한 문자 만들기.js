let s = "try hello world ";

// 1. 문장을 기준으로가 아닌 각 띄어쓰기마다의 단어 별로 인덱스를 정해야하기때문에 다른 풀이다.

// let arr = s.split("");

// let answer = "";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === " ") {
//     answer += " ";
//   } else if (i % 2 === 0) {
//     answer += arr[i].toUpperCase();
//   } else {
//     answer += arr[i].toLowerCase();
//   }
// }

// console.log(answer);
// console.log(arr);

// 2. 구글링을 통한 다시 풀이

let a = s
  .split(" ") // split을 통한 한글자씩이 아닌 띄어쓰기를 기준으로 나눈다.
  .map((e) => {
    // 나눈것중 map을 통하여 하나씩 반복문을 통하여 홀/짝 인덱스마다 대소문자를 바꿔준다.
    let answer = "";
    for (let i = 0; i < e.length; i++) {
      if (i % 2 === 0) {
        answer += e[i].toUpperCase();
      } else {
        answer += e[i].toLowerCase();
      }
    }
    return answer;
  })
  .join(" "); // 단어마다 띄어쓰기를 추가

console.log(a);
