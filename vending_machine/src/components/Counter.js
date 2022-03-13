import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    margin: 5px;
    color: white;
    outline: none;
    cursor: pointer;
    background: black;
`;

const StyledCounter = styled.button`
    margin: 5px;
`;

const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <div>
                <StyledButton onClick={() => setValue(value - 1100)}>
                    콜라 : 1100원
                </StyledButton>
                <StyledButton onClick={() => setValue(value - 600)}>
                    물 : 600원
                </StyledButton>
                <StyledButton onClick={() => setValue(value - 700)}>
                    커피 : 700원
                </StyledButton>
            </div>
            <p>
                현재 투입된 금액은 <b>{value}</b> 입니다.
            </p>
            <StyledCounter onClick={() => setValue(value + 100)}>
                100원
            </StyledCounter>
            <StyledCounter onClick={() => setValue(value + 500)}>
                500원
            </StyledCounter>
            <StyledCounter onClick={() => setValue(value + 1000)}>
                1000원
            </StyledCounter>
            <StyledCounter onClick={() => setValue(value + 5000)}>
                5000원
            </StyledCounter>
            <StyledCounter onClick={() => setValue(value + 10000)}>
                10000원
            </StyledCounter>
        </div>
    );
};

export default Counter;
