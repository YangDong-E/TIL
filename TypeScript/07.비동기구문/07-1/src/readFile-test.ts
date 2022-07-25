// 비동기 방식 API

import { readFile } from 'fs';

readFile('./package.json', (err: Error, buffer: Buffer) => {
    if (err) throw err; // 오류 발생 시 처리 코드
    else {
        const content: string = buffer.toString();
        console.log(content); // package.json 파일 내용
    }
});

// 코드는 멈추지 않고 계속 진행
