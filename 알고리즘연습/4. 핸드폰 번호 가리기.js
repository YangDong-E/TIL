let phone_number = "01033334444"; // 입력 번호

let result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4); // *을 번호의 길이의 뒤의 4자리를 제외한 만큼 반복하고 그 후 번호의 뒤에서부터 4자리를 문자열로 붙인다.

console.log(result);
