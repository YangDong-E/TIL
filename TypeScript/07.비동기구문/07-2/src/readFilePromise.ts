// 비동기 방식 API인 readFile을 호출하는 내용을 프로미스로 구현
import { readFile } from 'fs';

export const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>(
        (resolve: (value: string) => void, reject: (error: Error) => void) => {
            readFile(filename, (err: Error, buffer: Buffer) => {
                if (err)
                    reject(err); // 에러가 발생할 때는 reject(err) 함수를 호출
                else resolve(buffer.toString()); // 에러가 발생하지 않고 정상적으로 실행될 때는 buffer를 이용해 resolve(buffer) 함수를 호출한다.
            });
        },
    );
