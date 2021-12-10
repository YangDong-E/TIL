import React, { useState } from "react";

// 기초 개념

// const IterationSample = () => {
//     const names = ["눈사람", "얼음", "눈", "바람"]; //배열 만들기
//     // const nameList = names.map((name) => <li>{name}</li>); //map()함수로 names의 길이만큼 반복하며 <li>{name}</li>를 nameList에 담는다. 하지만 key 값이 없기때문에 key 값을 설정해주어야한다.
//     const nameList = names.map((name, index) => <li key={index}>{name}</li>); //배열의 index 값을 key값으로 설정한 모습
//     return <ul>{nameList}</ul>; // 출력
// };

const IterationSample = () => {
    const [names, setNames] = useState([
        //데이터 배열
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            //push가 아닌 concat을 사용하면 push는 기존 배열 자체를 변경하지만, concat은 새로운 배열을 만들어준다. *리액트에서 상태를 업데이트할때의 불변성 유지를 해야하기때문*
            id: nextId, //nextId 값을 id로 설정
            text: inputText,
        });
        setNextId(nextId + 1); //nextId 값에 1을 더해 준다.
        setNames(nextNames); //names 값을 업데이트 해준다.
        setInputText(""); //inputText를 비운다.
    };
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id); //filter를 사용하여 특정배열에서 특정 원소만 제외시킨다. name의id에서 id를 제외
        setNames(nextNames);
    };

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {/* onDoubleClick을 사용하여 더블클릭 했을 시 onRemove의name.id기준으로 메서드를 실행 */}
            {name.text}
        </li>
    ));
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
