import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

// 1. Link 컴포넌트를 사용하여 페이지 이동 하기         withRouter를 사용하는것보다 웹 접근성으로 따지면 Link컴포넌트를 사용하는것이 더 옳은 방식이다. - Link 컴포넌트는 a 태그를 사용하기 때문이다.
//                                             HTML 태그는 용도대로 사용하는것이 좋고 Link컴포넌트를 사용하면 버튼에 마우스를 올렸을시 브라우저 하단에 주소가 나타난다.

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
    ${(props) =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}

    ${(props) =>
        props.cyan &&
        css`
            background: ${palette.cyan[5]};
            &:hover {
                background: ${palette.cyan[4]};
            }
        `}

    &:disabled {
        background: ${palette.gray[3]};
        color: ${palette.gray[5]};
        cursor: not-allowed;
    }
`;
const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = (props) => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;

// 2. withRouter를 사용하여 Header에서 페이지 이동

// const StyledButton = styled.button`
//     border: none;
//     border-radius: 4px;
//     font-size: 1rem;
//     font-weight: bold;
//     padding: 0.25rem 1rem;
//     color: white;
//     outline: none;
//     cursor: pointer;

//     background: ${palette.gray[8]};
//     &:hover {
//         background: ${palette.gray[6]};
//     }
//     ${props =>
//         props.fullWidth &&
//         css`
//             padding-top: 0.75rem;
//             padding-bottom: 0.75rem;
//             width: 100%;
//             font-size: 1.125rem;
//             `}

//     ${props =>
//         props.cyan &&
//         css`
//             background: ${palette.cyan[5]};
//             &:hover{
//                 background: ${palette.cyan[4]};
//             }
//         `
//     }
// `;

// const Button = ({to, history, ...rest}) => {

//     const onClick = e => {
//         // to가 있다면 to로 페이지 이동
//         if(to){
//             history.push(to);
//         }
//         if(rest.onClick){
//             rest.onClick(e);
//         }
//     }
//     return <StyledButton {...rest} onClick={onClick}/>
// }

// export default withRouter(Button);
