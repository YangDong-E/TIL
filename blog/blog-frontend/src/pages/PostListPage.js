import React from 'react';
import PostList from '../components/post/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostListContainer />
            {/* <PostList /> */}
            <PaginationContainer />
        </>
    );
};

export default PostListPage;
