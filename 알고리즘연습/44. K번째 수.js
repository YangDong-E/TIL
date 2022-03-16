var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
var answer = [];

// commands를 반복문을 돌린다.
for (let a = 0; a < commands.length; a++) {
  // 각 i  j  k의 값을 정해준다.
  let i = commands[a][0];
  let j = commands[a][1];
  let k = commands[a][2];

  // slice를 할때 i값은 몇번째수이지 인덱스번호는 0부터 시작하기때문에 -1을 반드시 해준다.
  // 그후 배열을 오름차순으로 정렬
  let arr = array.slice(i - 1, j).sort((a, b) => a - b);
  // k도 마찬가지로 몇번째수이지 인덱스 번호는 0부터 시작하기때문에 -1을 해준다.
  answer.push(arr[k - 1]);
}

console.log(answer);
