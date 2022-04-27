import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white',
    };

    return (
        <div>
            <h3>사용자 목록:</h3>
            <hl>
                <li>
                    {/* Link와 비슷하지만 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트이다.
                        NavLink에서 링크가 활성화되었을 때의 스타일을 적용할 때는 activeStyle 값을, CSS 클래스를 적용할 때는 activeClassName 값을 props로 넣어주면 된다. */}
                    <NavLink activeStyle={activeStyle} to="/profiles/yangdong">
                        yangdong
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">
                        gildong
                    </NavLink>
                </li>
            </hl>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
