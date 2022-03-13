import "../src/index.css";

var coin = 0; // 처음 현금 기본값 0 원
document.getElementById("current").innerHTML = coin + "원";
// 현재 금액을 나타내는 부분

var balance = 0; // 현재 카드 잔액

// 금액에 따른 색 변환
function color_change() {
  // 현금이나 카드 잔액이 1100원 이상일때
  if (coin >= 1100 || balance >= 1100) {
    document.getElementById("coke").style.color = "rgb(51,255,51)";
    document.getElementById("water").style.color = "rgb(51,255,51)";
    document.getElementById("coffee").style.color = "rgb(51,255,51)";
  }
  // 현금이나 카드 잔액이 700원 이상일때
  else if (coin >= 700 || balance >= 700) {
    document.getElementById("coke").style.color = "rgb(255,51,51)";
    document.getElementById("water").style.color = "rgb(51,255,51)";
    document.getElementById("coffee").style.color = "rgb(51,255,51)";
  }
  // 현금이나 카드 잔액이 600원 이상일때
  else if (coin >= 600 || balance >= 600) {
    document.getElementById("coke").style.color = "rgb(255,51,51)";
    document.getElementById("water").style.color = "rgb(51,255,51)";
    document.getElementById("coffee").style.color = "rgb(255,51,51)";
  }
  // 현금이나 카드 잔액이 600원 미만일때
  else if (coin < 600 || balance < 600) {
    document.getElementById("coke").style.color = "rgb(255,51,51)";
    document.getElementById("water").style.color = "rgb(255,51,51)";
    document.getElementById("coffee").style.color = "rgb(255,51,51)";
  }
  // 초기화 상태
  else {
    document.getElementById("coke").style.color = "white";
    document.getElementById("water").style.color = "white";
    document.getElementById("coffee").style.color = "white";
  }
}

// btn1(100원) 버튼 눌렀을 때
function click_btn1() {
  coin = coin + 100;
  color_change();
  alert("100원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

// btn2(500원) 버튼 눌렀을 때
function click_btn2() {
  coin += 500;
  color_change();
  alert("500원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

// btn3(1000원) 버튼 눌렀을 때
function click_btn3() {
  coin += 1000;
  color_change();
  alert("1000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

// btn4(5000원) 버튼 눌렀을 때
function click_btn4() {
  coin += 5000;
  color_change();
  alert("5000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

// btn5(10000원) 버튼 눌렀을 때
function click_btn5() {
  coin += 10000;
  color_change();
  alert("10000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

// 카드 결제 버튼을 눌렀을때
function click_card() {
  balance = 100000;
  document.getElementById("current").innerHTML = "Card Payment";
  document.getElementById("coke").style.color = "rgb(51,255,51)";
  document.getElementById("water").style.color = "rgb(51,255,51)";
  document.getElementById("coffee").style.color = "rgb(51,255,51)";
}

// 콜라를 눌렀을 때
function click_coke() {
  if (coin < 1100 && balance < 1100) {
    alert("돈이 부족합니다");
  } else if (coin >= 1100) {
    coin -= 1100;
    alert("콜라 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  } else {
    balance -= 1100;
    alert("콜라 뽑음");
    color_change();
  }
}

// 물을 눌렀을 때
function click_water() {
  if (coin < 600 && balance < 600) {
    alert("돈이 부족합니다");
  } else if (coin >= 600) {
    coin -= 600;
    alert("물 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  } else {
    balance -= 600;
    alert("물 뽑음");
    color_change();
  }
}

// 커피를 눌렀을 때
function click_coffee() {
  if (coin < 700 && balance < 700) {
    alert("돈이 부족합니다");
  } else if (coin >= 700) {
    coin -= 700;
    alert("커피 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  } else {
    balance -= 700;
    alert("커피 뽑음");
    color_change();
  }
}

// 반환 버튼을 눌렀을 때
function click_return() {
  if (coin > 0) {
    coin -= coin;
    document.getElementById("coke").style.color = "white";
    document.getElementById("water").style.color = "white";
    document.getElementById("coffee").style.color = "white";
    document.getElementById("current").innerHTML = coin + "원";
  } else if (balance > 0) {
    balance -= balance;
    document.getElementById("coke").style.color = "white";
    document.getElementById("water").style.color = "white";
    document.getElementById("coffee").style.color = "white";
    document.getElementById("current").innerHTML = balance + "원";
  } else {
    alert("잔돈이 없습니다.");
  }
}

// English(영문 변환)버튼을 눌렀을 때
function click_Eng() {
  document.getElementById("coke").setAttribute("value", "Coke(1100 WON)");
  document.getElementById("water").setAttribute("value", "Water(600 WON)");
  document.getElementById("coffee").setAttribute("value", "Coffee(700 WON)");
  document.getElementById("btn1").setAttribute("value", "100 WON");
  document.getElementById("btn2").setAttribute("value", "500 WON");
  document.getElementById("btn3").setAttribute("value", "1000 WON");
  document.getElementById("btn4").setAttribute("value", "5000 WON");
  document.getElementById("btn5").setAttribute("value", "10000 WON");
  document.getElementById("return").setAttribute("value", "Return");
  document.getElementById("card").setAttribute("value", "Card");
  document.getElementById("amount").innerHTML = "Current Amount : ";
}

// 한국어를 눌렀을때
function click_Kor() {
  window.location.reload(true);
}

//이벤트 실행
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", click_btn4);

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", click_btn5);

const card = document.getElementById("card");
card.addEventListener("click", click_card);

const coke = document.getElementById("coke");
coke.addEventListener("click", click_coke);

const water = document.getElementById("water");
water.addEventListener("click", click_water);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", click_coffee);

const return_btn = document.getElementById("return");
return_btn.addEventListener("click", click_return);

const Kor = document.getElementById("Kor");
Kor.addEventListener("click", click_Kor);

const Eng = document.getElementById("Eng");
Eng.addEventListener("click", click_Eng);
