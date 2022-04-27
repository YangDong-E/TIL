import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    {/* Link 컴포넌트는 클릭을 할때 다른 주소로 이동시켜주는 컴포넌트이다.
                    a 태그도 있지만 이 태그는 리액트 라우터를 사용할 때 직접 사용하면 안된다.
                    이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태를 모두 날려 버려 처음부터 렌더링을 하게된다. */}
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">History 예제</Link>
                </li>
            </ul>
            <hr />
            {/* Switch 컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링 시켜준다.
            Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현 가능하다. */}
            <Switch>
                {/* Route 컴포넌트를 사용하여 사용자의 현재 경로에 따라 다른 컴포넌트를 보여준다.
                path - 경로 , component - 보여줄 컴포넌트, exact - 다른 컴포넌트와 겹치는 부분이 있을 시 Home을 위해 사용 */}
                <Route path="/" component={Home} exact={true} />
                <Route path={['/about', '/info']} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                    // path를 따로 정의 하지 않으면 모든 상황에 렌더링 됨
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
};

export default App;
