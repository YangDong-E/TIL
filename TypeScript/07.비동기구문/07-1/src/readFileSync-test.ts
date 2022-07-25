// 동기 방식 API

import { readFileSync } from 'fs';

// package.json 파일의 바이너리 내용
const buffer: Buffer = readFileSync('./package.json'); // package.json 파일을 읽는 동안 코드가 일시적으로 멈춤
const content: string = buffer.toString();
console.log(content); // package.json 파일의 텍스트 내용
