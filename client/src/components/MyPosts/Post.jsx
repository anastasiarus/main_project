import React, { useState} from "react";
import classes from "./Post.module.css";
import ava from "../../images/users.png";
import axios from "axios";


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

const Dislike = ({ y, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(y);
    };
    return (
      <button className={classes.btn} onClick={handleClick}>
        DISLIKE
      </button>
    );
  };

const Post = ({message, id, update, isEdit}) => {
  const [count, setCount] = useState(0);
  const [discount, setDisCount] = useState(0);

  const likeCount = (i) => {
    setCount(count + i);
  };
  const dislikeCount = (y) => {
    setDisCount(discount + y);
  };

  const deletePost = async () => {
    await axios({
      url: "http://localhost:5000/api/posts",
      method: "DELETE",
      data: {
          id,
     },
    });
    const updatePage = () => update(isEdit)
    updatePage()
  };

  return (
    <div className={classes.item}>
      <img src={ava}></img>
      <div>{message}</div>
      <div className={classes.like}>
        <Like i={1} onClickFunction={likeCount} />
        <span className={classes.count}>{count}</span>
        <Dislike y={1} onClickFunction={dislikeCount} />
        <span className={classes.discount}>{discount}</span>
        <button className={classes.btn} onClick={deletePost}>Удалить запись</button>
      </div>
    </div>
  );
};

export default Post;
