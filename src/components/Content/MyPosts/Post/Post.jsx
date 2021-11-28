import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://media.krasota.ru/filer_public/fa/ae/faae81fe-0461-4af9-986a-f7249d8fca67/39_rodri_gogurio.jpg'></img>
      {props.message} 
      <div>
        <span> likes {props.likesCount} </span>
      </div>
    </div>


  )

}

export default Post;