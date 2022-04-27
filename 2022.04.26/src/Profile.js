import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    yangdong: {
        name: '강동오',
        description: '리액트를 좋아하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공',
    },
};

// 라우트로 사용된 컴포넌트에서 match를 props로 받아온다.
const Profile = ({ match }) => {
    // username 파라미터를 읽어오는 작업
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default withRouter(Profile);
