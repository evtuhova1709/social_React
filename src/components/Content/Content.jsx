import React from 'react';
import ContentAvaText from './ContentAvaText/ContentAvaText';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Content = (props) => {

  return (
    <div>
      <ContentAvaText profile={props.profile}/>
      <MyPostsContainer  />

    </div>

  );
}
export default Content;