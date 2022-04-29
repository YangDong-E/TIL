import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// 카테고리 분류
const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];

// styled-components 사용법
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

// HTML 요소가 아닌 특정 컴포넌트에 styled-components를 사용할 때는 styled(컴포넌트이름)`` 형식으로 사용한다.
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b9cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = () => {
    return (
        // 스타일이 적용된 컴포넌트를 사용
        <CategoriesBlock>
            {/* 카테고리의 목록을 map으로 요소마다 적용시켜준다. */}
            {categories.map((c) => (
                <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === 'all'}
                    // NavLink로 만들어진 Category 컴포넌트에 to 값은 '/카테고리이름'으로 설정되었다.
                    // 전체 보기의 경우 예외적으로 '/all' 대신 '/'로 설정 하였다.
                    // to 값이 '/'를 가리키고 있을 때는 exact를 true로 해주어야한다.
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
