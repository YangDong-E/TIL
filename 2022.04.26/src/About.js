import React from 'react';
// 쿼리 문자열을 객체로 변환할때 사용하는 qs 라이브러리
import qs from 'qs';

// 웹 사이트를 소개하는 소개 페이지 구현

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열이다.
    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제
                프로젝트입니다.
            </p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;
