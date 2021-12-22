import React, { useState, useMemo, useCallback, useRef } from 'react';

//useMemo : 렌더링하는 과정에서 특정 값이 바뀌었을때만 연산을 실행, 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
//useCallback : 주로 렌더링 성능을 최적화해야 하는 상황에서 사용. 만들어 놨던 함수를 재사용할 수 있다. -> 첫번째 파라미터 : 생성하고싶은 함수, 두번째 파라미터 : 배열 (어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시)
//useRef : 함수형 컴포넌트에서 ref를 쉽게 사용할 수있도록 해준다. -> useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다.

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };
    // const onInsert = (e) => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // };

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);
    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;
