// 이번 알고리즘을 하면서 순서는 생각했지만 방법을 몰라서 구글링을 통해 filter와 sort,map을 사용하여 해결한 분의 코드를 참조하여 공부하였다.
var N = 5;
var stages = [2, 1, 2, 6, 2, 4, 3, 3];
var stageRatio = [];
var users = stages.length;

for (let i = 1; i <= N; i++) {
  // noClear(아직 클리어하지 못한 유저 수 - 스테이지에 머물러있는 유저)는 stages를 돌면서 스테이지와 같은 값을 구한 뒤 길이를 반환
  let noClear = stages.filter((user) => i === user).length;
  // ratio는 실패율 : 머물러있는 유저 수 / 총 유저 수
  let ratio = noClear / users;
  //총 유저 수에서 클리어 못한 유저수를 빼준다.
  users -= noClear;
  // 스테이지와 그것에 맞는 실패율 값을 넣어준다.
  stageRatio.push({ stage: i, ratio: ratio });
}

// 정렬
stageRatio.sort((a, b) => {
  // 실패율이 같은 스테이지는 오름차순으로 작은 수부터
  if (a.ratio === b.ratio) {
    return a.stage - b.stage;
  }
  // 아닐시 내림차순으로
  else {
    return b.ratio - a.ratio;
  }
});

// map을 통해서 정렬한 값들을 스테이지만 나오게 새로운 배열로 만든다.
console.log(stageRatio.map((obj) => obj.stage));
