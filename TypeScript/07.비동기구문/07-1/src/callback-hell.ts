// 비동기 API를 사용하여 콜백 지옥 코드의 예시

import { readFile } from 'fs';

readFile('./package.json', (err: Error, buffer: Buffer) => {
    if (err) throw err;
    else {
        const content: string = buffer.toString();
        console.log(content);

        // readFile('./package.json')의 콜백 함수 몸통에 다시 readFile('./tsconfig.json')을 호출하여 중첩 방식의 코드 구조
        readFile('./tsconfig.json', (err: Error, buffer: Buffer) => {
            if (err) throw err;
            else {
                const content: string = buffer.toString();
                console.log(content);
            }
        });
    }
});
