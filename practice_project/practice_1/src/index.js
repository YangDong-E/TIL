// import './index.css';

// let usedNums = new Array(25);

// function getNewNum(props) {
//     // 25까지 랜덤수 뽑기
//     let num = Math.floor(Math.random() * 25);
//     // ID square + 숫자
//     let currSquare = 'square' + props;
//     // index 수
//     let newNum;
//     // 빈배열 25 만들기
//     let Arr = new Array(25);

//     for (let props = 0; props < Arr.length; props++) {
//         newNum = Arr[props] * 15 + num + 1;
//         return newNum;
//     }

//     document.getElementById('square0').innerHTML = num;
//     document.getElementById('square1').innerHTML = num;
//     document.getElementById('square2').innerHTML = num;
//     document.getElementById('square3').innerHTML = num;
//     document.getElementById('square4').innerHTML = num;
//     document.getElementById('square5').innerHTML = num;
//     document.getElementById('square6').innerHTML = num;
//     document.getElementById('square7').innerHTML = num;
//     document.getElementById('square8').innerHTML = num;
//     document.getElementById('square9').innerHTML = num;
//     document.getElementById('square10').innerHTML = num;
//     document.getElementById('square11').innerHTML = num;
//     document.getElementById('square12').innerHTML = num;
//     document.getElementById('square13').innerHTML = num;
//     document.getElementById('square14').innerHTML = num;
//     document.getElementById('square15').innerHTML = num;
//     document.getElementById('square16').innerHTML = num;
//     document.getElementById('square17').innerHTML = num;
//     document.getElementById('square18').innerHTML = num;
//     document.getElementById('square19').innerHTML = num;
//     document.getElementById('square20').innerHTML = num;
//     document.getElementById('square21').innerHTML = num;
//     document.getElementById('square22').innerHTML = num;
//     document.getElementById('square23').innerHTML = num;
//     document.getElementById('square24').innerHTML = num;
// }

// const btn = document.getElementById('btn');
// btn.addEventListener('click', getNewNum);

var usedNums = new Array(26);

function newCard() {
    //Starting loop through each square card
    for (var i = 0; i < 24; i++) {
        //<--always this code for loops. change in red
        setSquare(i);
    }
}

function setSquare(thisSquare) {
    var currSquare = 'square' + thisSquare;
    var newNum;

    var colPlace = new Array(
        0,
        1,
        2,
        3,
        4,
        0,
        1,
        2,
        3,
        4,
        0,
        1,
        3,
        4,
        0,
        1,
        2,
        3,
        4,
        0,
        1,
        2,
        3,
        4,
    );

    do {
        newNum = colPlace[thisSquare] * 15 + getNewNum() + 1;
    } while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
    return Math.floor(Math.random() * 25);
}

function anotherCard() {
    for (var i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }

    newCard();
}
