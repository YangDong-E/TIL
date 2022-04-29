import { useState, useEffect } from 'react';

// 커스텀 Hook(usePromise) 만들기
// usePromise를 사용하면 NewsList에서 대기 중 상태 관리와 useEffect 설정을 직접 하지 않아도 된다.

// usePromise의 의존 배열 deps를 파라미터로 받아 온다.
// 파라미터로 받아 온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존 배열로 설정된다.
export default function usePromise(promiseCreator, deps) {
    // usePromise Hook은 Promise의 대기 중/완료/실패에 대한 상태 관리를 한다.
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            // 실행되는 함수
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                // 에러 발생시
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return [loading, resolved, error];
}
