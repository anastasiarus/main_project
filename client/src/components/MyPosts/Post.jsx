import React, { useState } from "react";
import classes from "./Post.module.css";
import ava from "../../images/users.png";

const Like = ({ i, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(i);
  };
  return (
    <button className={classes.btn} onClick={handleClick}>
      LIKE
    </button>
  );
};

const Dislike = ({ i, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(i);
    };
    return (
      <button className={classes.btn} onClick={handleClick}>
        DISLIKE
      </button>
    );
  };

const Post = (props) => {
  const [count, setCount] = useState(0);
  const likeCount = (i) => {
    setCount(count + i);
  };

  const [discount, setDisCount] = useState(0);
  const dislikeCount = (i) => {
    setDisCount(count - i);
  };


  return (
    <div className={classes.item}>
      <img src={ava}></img>
      <div>{props.message}</div>
      <div className={classes.like}>
          
        <Like i={1} onClickFunction={likeCount} />
        <span className={classes.count}>{count}</span>
      
        <Dislike i={1} onClickFunction={dislikeCount} />
        <span className={classes.count}>{discount}</span>
      
      </div>
    </div>
  );
};

export default Post;
