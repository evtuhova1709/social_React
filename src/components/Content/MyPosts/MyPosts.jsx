import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
   
  return (
    <div className={classes.postsBlock}>
      <h2>Новая запись</h2>
      <div>
        <div className={classes.myPostsArea}>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div className={classes.myPostsBtn}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;
