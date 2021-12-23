import React from 'react';
import styled, { css } from 'styled-components';

// 함수화 하여 간편하게 반응형 디자인 하기
const sizes = {
    desktop: 1024,
    tablet: 768,
};

// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 준다.
//styled-components.com 문서 참조
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});

const Box = styled.div`
    background: ${(props) => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px`}
    ${media.tablet`width: 100%`}
`;

// const Box = styled.div`
//     /* 스타일링된 엘리먼트를 만들 때는 컴포넌트 파일의 상단에서 styled를 불러오고, styled.태그명을 사용하여 구현 */

//     /* props로 넣어 준 값을 직접 전달해 줄 수 있다. */

//     background: ${(props) => props.color || 'blue'};
//     /* background 값에 props를 조회해서 porps.color의 값을 사용하게 하였다. color값이 주어지지 않을 때는 blue를 기본 색상으로 설정 아래 코드에서 <Box color="black"/>으로 color 값을 props로 black을 넣어줌*/

//     padding: 1rem;
//     display: flex;

//     /* 컴포넌트 한개일 때 반응형 디자인  -> @media 쿼리 사용*/

//     /* 기본적으로 가로 크기 1024px에 가운데 정렬을 하고 가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉채운다. */
//     width: 1024px;
//     margin: 0 auto;
//     @media (max-width: 1024px) {
//         width: 768px;
//     }
//     @media (max-width: 768px) {
//         width: 100%;
//     }
// `;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    
    /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
    
    &:hover{
        background: rgba(255,255,255,0.9)
    }

    /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
    ${(props) =>
        props.inverted &&
        css`
            /* css로 묶지 않아도 작동은 하긴 하지만 그렇게 했을 시 문자열로 취급되기 때문에 VS Code 확장 프로그램에 신택스 하이라이팅이 제대로 이루어지지않는다. Tagged 템플릿 리터럴이 아니기 때문에 함수를 받아 사용하지 못해 props 값을 사용하지 못한다. */
            /* 조건부 스타일링을 할때 넣는 여러 줄의 코드에서 props를 참조하지 않는다면 굳이 css를 불러와서 사용하지 않아도 되지만, props를 사용한다면 반드시 CSS로 감싸주어 Tagged 템플릿 리터럴을 사용해 주어야 한다. */

            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        `}
    };
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponents = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyledComponents;
