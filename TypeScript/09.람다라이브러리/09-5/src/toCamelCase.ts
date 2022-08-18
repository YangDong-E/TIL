// toCamelCase : 임의의 문자열을 프로그래밍에서 심벌의 이름을 지을 때 많이 사용하는 Camel 표기법으로 바꿈
import * as R from 'ramda';

type StringToStringFunc = (string: any) => string;
export const toCamelCase = (delim: string): StringToStringFunc => {
    const makeFirstToCapital = (word: string) => {
        const characters = word.split('');
        return characters
            .map((c, index) => (index == 0 ? c.toUpperCase() : c))
            .join('');
    };
    // R.map의 콜백 함수에 index 매개변수 제공
    const indexedMap = R.addIndex(R.map);
    return R.pipe(
        R.trim, // 앞뒤로 공백 문자 제거
        R.split(delim), // delim 문자열을 구분자로 배열로 전환
        R.map(R.toLower), // 배열에 있는 모든 문자열을 소문자로 전환
        indexedMap((value: any, index: number) =>
            index > 0
                ? // 두 번째 문자열부터 첫 문자만 대문자로 전환
                  makeFirstToCapital(value)
                : value,
        ),
        // @ts-ignore
        R.join(''), // 배열을 다시 문자열로 전환
    ) as StringToStringFunc;
};
