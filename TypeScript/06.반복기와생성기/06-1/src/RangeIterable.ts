// [Symbol.iterator] 에러 해결 방법
// createRangeIterable 함수를 다음 RangeIterable처럼 클래스로 구현해야한다는 의미
export class RangeIterable {
    constructor(public from: number, public to: number) {}
    [Symbol.iterator]() {
        const that = this // *
        let currentValue = that.from
        return {
            next() {
                const value =
                    currentValue < that.to ? currentValue++ : undefined // **
                const done = value == undefined
                return { value, done }
            },
        }
    }
}

// 해석

/*  클래스의 메서드는 자바스크립트의 function 키워드가 생략되었을 뿐 사실상 function 키워드로 만들어지는 함수인데
    function 키워드로 만들어지는 함수는 내부에서 this 키워드를 사용할 수 있다.
    하지만 * 이부분에서 this값을 that 변수에 담고 있는데, 그 이유는 ** 에서 that.to 부분을 위한 것이다.
    또한 왜 that 변수에 담았는지에 대한 이유는 next함수 또한 function 키워드가 생략 된 메서드이므로 컴파일러가 next의 this로 해석하지 않게 하는 자바스크립트의 유명한 코드 트릭이다.
*/
