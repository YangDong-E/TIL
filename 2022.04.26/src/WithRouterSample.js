import React from 'react';
import { withRouter } from 'react-router-dom';

// withRouter 함수는 HoC(Higher-order Component)이며, 라우트로 사용된 컴포넌트가 아니어도
// match,location,history 객체를 접근할 수 있게 해준다.
const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            {/* JSON.stringify의 두 번째 파라미터와 세 번째 파라미터에 null 과 2를 설정해 주면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어진다. */}
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

// withRouter를 사용할 때는 컴포넌트를 내보내 줄 때 함수로 감싸준다.
export default withRouter(WithRouterSample);
