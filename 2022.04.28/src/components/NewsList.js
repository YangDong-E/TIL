import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // 커스텀 Hook (usePromise) 사용
    const [loading, response, error] = usePromise(() => {
        // 현재 category 값이 무엇인지에 따라 요청할 주소가 동적으로 바뀌고 있다.
        // category 값이 all이라면 query값을 공백으로 설정하고, all이 아니라면 '&category=카테고리' 형태의 문자열을 만들도록 하였다.
        const query = category === 'all' ? '' : `&category=${category}`;
        // 그리고 query를 주소에 포함시켰다.
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9a0dfcd4abaf434583c6d423de927a57`
        );
    }, [category]);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    // 아직 response 값이 설정 되지 않았을 때
    if (!response) {
        return null;
    }

    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    // response 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
