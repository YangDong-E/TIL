// indexOf를 사용하여 해결하려했지만, 실패하여 구글링해본결과 sort를 사용하여 쉽게 구현할수있다하여
// sort와 배열에서의 요소의 여부를 확인 하여 반환하는 find를 사용하여 구현해보았다.
var participant = ["mislav", "stanko", "mislav", "ana"];
var completion = ["stanko", "ana", "mislav"];

participant.sort();
completion.sort();

var answer = participant.find((a, i) => a !== completion[i]);

console.log(answer);
