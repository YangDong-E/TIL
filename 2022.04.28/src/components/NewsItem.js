import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

// article이라는 객체를 props로 통째로 받아와서 사용한다.
const NewsItem = ({ article }) => {
    // article 객체에서 title - 제목, description - 내용, url - 링크, urlToImage - 뉴스 이미지를 사용
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    {/* a 태그에서 속성 href는 주소, target은 링크 오픈 위치(현재 창 or 새 창), rel은 현재 문서와 링크된 문서 사이의 연관 관계를 명시한다. */}
                    {/* a태그의 주소는 url, 링크 오픈 위치는 새 탭을 가지고있다. */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
