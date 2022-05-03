import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    // children에 함수를 전달하는 Render Props 패턴이 불편하면
    // useContext Hook을 사용하여 함수형 컴포넌트에서 Context를 편하게 사용 가능
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color,
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
