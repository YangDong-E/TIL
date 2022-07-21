// 1. Iterable<T>

/* 
    자신을 구현하는 클래스가 [Symbol.iterator]메서드를 제공한다는 것을 명확하게 알려주는 역할

    ex)

    class 구현클래스 implements Iterable<생성할 값의 타입> {}
*/

// 2. Iterator<T>

/*
    반복기가 생성할 값의 타입을 명확하게 해주는 역할

    ex)

    [Symbol.iterator](): Iterator<생성할 값의 타입> {}
*/

export class StringIterable implements Iterable<string> {
    constructor(
        private strings: string[] = [],
        private currentIndex: number = 0
    ) {}
    [Symbol.iterator](): Iterator<string> {
        const that = this
        let currentIndex = that.currentIndex,
            length = that.strings.length

        const iterator: Iterator<string> = {
            next(): { value: string; done: boolean } {
                const value =
                    currentIndex < length
                        ? that.strings[currentIndex++]
                        : undefined
                const done = value == undefined
                return { value, done }
            },
        }
        return iterator
    }
}
