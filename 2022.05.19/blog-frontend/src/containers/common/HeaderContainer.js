import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
// 만들어둔 액션생성 함수를 import 한다.
import { logout } from '../../modules/user';

const HeaderContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));

    // useDispatch를 사용하여 생성한 action을 발생시킨다.
    const dispatch = useDispatch();
    // logout 액션 생성 함수를 디스패치하는 onLogout 함수를 만든다.
    const onLogout = () => {
        dispatch(logout());
    };
    return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
