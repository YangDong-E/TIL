// 세미코루틴의 동작 방식 - 지정한 주기로 콜백 함수를 계속 호출해 준다.

// const intervalID = setInterval(콜백 함수, 호출 주기)

// clearInterval 함수를 사용하여 무한히 반복 되는 setInterval함수를 멈출 수 있다.

// clearInterval(intervalID)

const period = 1000
let count = 0
console.log('program started...')
const id = setInterval(() => {
    if (count >= 3) {
        clearInterval(id)
        console.log('program finished...')
    } else console.log(++count)
}, period)
