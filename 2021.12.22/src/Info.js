import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname,
        });
    });

    //마운트될 때만 실행하고 싶을 때
    useEffect(() => {
        console.log('마운트될 때만 실행됩니다.');
    }, []); //처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어주면 된다.

    //특정 값이 업데이트될 때만 실행하고 싶을 때
    useEffect(() => {
        console.log(name);
    }, [name]); //props 안에 들어 있는 value 값이 바뀔 때만 특정 작업을 수행한다.
    //useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.

    //뒷정리하기
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, [name]); //컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 cleanup함수를 반환해 주어야 한다.

    //언마운트
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        };
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
