import React from 'react';
import { Route } from 'react-router-dom';
import UserContainer from '../containers/UserContainer';
import UsersContainer from '../containers/UsersContainer';

const UsersPage = () => {
    return (
        <>
            <UsersContainer />
            <Route
                path="/users/:id"
                // componet 대신 render를 사용하여 UserContainer를 렌더링할 때 URL파라미터 id를 props로 바로 집어 넣을 수 있다.
                render={({ match }) => <UserContainer id={match.params.id} />}
            />
        </>
    );
};

export default UsersPage;
