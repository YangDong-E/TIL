import "../src/index.css";

var coin = 0; //처음 돈 상태는 0원
//현재 잔액 확인해주는 것 (현재 coin값이 html에 찍히게 함)
document.getElementById("current").innerHTML = coin + "원";

//현재 금액에 따라 제품색상 변하게 해주는 함수

function color_change() {
  //만약 1000원이상 들어있으면 모든 제품을 다 구매가능하니 전부 파란색으로 변경
  if (coin >= 1100) {
    document.getElementById("coke").style.color = "rgb(51,255,51)";
    document.getElementById("water").style.color = "rgb(51,255,51)";
    document.getElementById("coffee").style.color = "rgb(51,255,51)";
  } else if (coin >= 700) {
    document.getElementById("coke").style.color = "rgb(255,51,51)";
    document.getElementById("water").style.color = "rgb(51,255,51)";
    document.getElementById("coffee").style.color = "rgb(51,255,51)";
  } else if (coin >= 600) {
    document.getElementById("coke").style.color = "rgb(255,51,51)";
    document.getElementById("water").style.color = "rgb(51,255,51)";
    document.getElementById("coffee").style.color = "rgb(255,51,51)";
  } else {
    document.getElementById("coke").style.color = "rgb(255,51,51)";
    document.getElementById("water").style.color = "rgb(255,51,51)";
    document.getElementById("coffee").style.color = "rgb(255,51,51)";
  }
}
//버튼1을 클릭하면 현재 금액(coin)에 1000원추가됨
function click_btn1() {
  coin = coin + 100;
  color_change();
  alert("100원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn2() {
  coin += 500;
  color_change();
  alert("500원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn3() {
  coin += 1000;
  color_change();
  alert("1000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn4() {
  coin += 5000;
  color_change();
  alert("5000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn5() {
  coin += 10000;
  color_change();
  alert("10000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_coke() {
  if (coin < 1100) {
    alert("돈이 부족합니다");
  } else {
    coin -= 1100;
    alert("콜라 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_water() {
  if (coin < 600) {
    alert("돈이 부족합니다");
  } else {
    coin -= 600;
    alert("물 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_coffee() {
  if (coin < 700) {
    alert("돈이 부족합니다");
  } else {
    coin -= 700;
    alert("커피 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  }
}

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

const coke = document.getElementById("coke");
coke.addEventListener("click", click_coke);

const water = document.getElementById("water");
water.addEventListener("click", click_water);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", click_coffee);
