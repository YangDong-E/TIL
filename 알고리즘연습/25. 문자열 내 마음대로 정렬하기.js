let strings = ["sun", "bed", "car"];

let n = 1;

let answer = strings.sort((a, b) => {
  if (a[n] > b[n]) {
    // 다음으로 넘어감
    return 1;
  }
  if (a[n] < b[n]) {
    // 비교를해서 배열에 앞으로 정렬을 바꿈
    return -1;
  }
  if (a[n] === b[n]) {
    // 같을땐 사전순으로 정렬해야하기때문에 요소 전체적으로 비교하여 정렬
    if (a < b) {
      return 1;
    }
    if (a < b) {
      return -1;
    } else {
      // 정렬을 바꾸지 않음
      return 0;
    }
  }
});

console.log(answer);
