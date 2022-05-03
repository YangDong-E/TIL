import { createContext, useState } from 'react';

// createContext 함수를 사용하여 새로운 Context를 만든다.
// 파라미터로는 해당 Context의 기본 상태를 지정한다.
const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => {},
        setSubcolor: () => {},
    },
});

// ColorProvider 컴포넌트를 작성하면서 내부에서 ColorContext.Provider를 렌더링하고있다.
const ColorProvider = ({ children }) => {
    // useState를 이용한 상태관리
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    // 동적 Context 사용
    // Provider의 value에 상태는 state로, 업데이트 함수는 actions로 묶어서 전달하고있다.
    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor },
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
