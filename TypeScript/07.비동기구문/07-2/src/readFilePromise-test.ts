import { readFilePromise } from './readFilePromise';

readFilePromise('./package.json') // readFilePromise에서 resolve 함수를 호출한 값은 then 메서드의 콜백 함수 쪽에 전달 된다.
    .then((content: string) => {
        console.log(content); // package.json 파일을 읽은 내용
        return readFilePromise('./tsconfig.json');
    })
    .then((content: string) => {
        console.log(content); // tsconfig.json 파일을 읽은 내용
        /*  catch 쪽 콜백 함수에 'EISDIR: illegal operation on a directory, read'
            라는 오류 메시지 전달 */
        return readFilePromise('.');
    })
    .catch((err: Error) => console.log('error:', err.message)) // reject 함수를 호출한 값은 catch 메서드의 콜백 함수 쪽에 전달 된다.
    .finally(() => console.log('프로그램 종료')); // Promise 객체의 메서드 체인 코드에서 finally는 항상 마지막에 호출 된다.
