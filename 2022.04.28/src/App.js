import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    // Route 컴포넌트 안에 path에 '/:category?'형식처럼 맨 뒤에 물음표 문자가 들어가는 의미는 category 값이 선택적(optional)이라는 의미이다.
    // 즉, 있을 수도 있고 없을 수도 있다는 뜻이다. category URL 파라미터가 없다면 전체 카테고리르 선택한 것으로 간주한다.
    return <Route path="/:category?" component={NewsPage} />;
};

export default App;
