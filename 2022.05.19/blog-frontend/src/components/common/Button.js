import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

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
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

// withRouter와 Link 두 방법이 있지만 웹 접근성을 위해서 Link컴포넌트는 a태그를 사용하기 때문에 Link를 사용하였다.
const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = (props) => {
    return props.to ? (
        // props.cyan 값을 0과 1로 변환해주어 styled 함수로 감싸서 만든 경우에도 임의 props가 필터링 되기 위해
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;
