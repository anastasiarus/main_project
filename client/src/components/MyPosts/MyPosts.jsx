import React, { useState, useEffect } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post";
import axios from "axios";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const getPosts = async () => {
    const info = await axios({
      url: "http://localhost:5000/api/posts",
      method: "GET",
    });
    setPosts(info.data);
  };

  useEffect(() => {
    getPosts();
  }, [isEdit]);

  const addPost = async () => {
    await axios({
      url: "http://localhost:5000/api/posts",
      method: "POST",
      data: {
        id: Date.now(),
        descText: value,
      },
    });
    setIsEdit(!isEdit);
    console.log(value);
  };

  const updateEdit = () => setIsEdit(!isEdit);

  const addValue = (e) => setValue(e.target.value);

  const postsElements = posts.map((p) => (
    <Post
      key={p.id}
      message={p.descText}
      id={p.id}
      isEdit={isEdit}
      update={updateEdit}
    />
  ));

  useEffect(() => {      
    document.title = `Посты`;  
  });

  return (
    <div className={classes.main}>
      <h5 className={classes.title}>Мои посты</h5>
      <div>
        <div>
          <textarea
            className={classes.textarea}
            value={value}
            onChange={addValue}
            placeholder="Добавь новый пост..."
          ></textarea>
        </div>
        <div>
          {" "}
          <button className={classes.btn} onClick={addPost}>
            Добавить запись
          </button>
        </div>
      </div>
      {posts.length == 0 ? (
        <div>
          <p className={classes.emptyArr}>
            У вас нет постов, но вы можете добавить новый
          </p>
        </div>
      ) : (
        <div className={classes.posts}>{postsElements}</div>
      )}
    </div>
  );
};

export default MyPosts;
