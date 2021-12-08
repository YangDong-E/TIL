import React, { useState } from "react";

//함수형 컴포넌트 이벤트 핸들링
const EventPractice = () => {
    //input이 적을때 쓰는 방법

    // const [username, setUsername] = useState("");
    // const [message, setMessage] = useState("");
    // const onChangeUsername = (e) => setUsername(e.target.value);
    // const onChangeMessage = (e) => setMessage(e.target.value);
    // const onClick = () => {
    //     alert(username + ": " + message);
    //     setUsername("");
    //     setMessage("");
    // };
    // const onKeyPress = (e) => {
    //     if (e.key === "Enter") {
    //         onClick();
    //     }
    // };

    //input이 많을때

    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const { username, message } = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: "",
            message: "",
        });
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                // onChange={onChangeUsername} //input이 적을때
                onChange={onChange} //input이 많을때
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                // onChange={onChangeMessage} //input이 적을때
                onChange={onChange} //input이 많을때
                onKeyPress={onKeyPress} //키가 눌렸을때 반응해야하는 메서드
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
