import React, { useState, useEffect } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post";
import axios from "axios";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  //const {token} = useContext(AuthContext)
  const getPosts = async () => {
    const { data } = await axios({
      url: "http://localhost:5000/api/posts",
      method: "GET",
      data: {
        id: "61e906356354c583e77e58d2",
      },
    });
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  

  const postsElements = posts.map((p) => (
    <Post key={p.postId} title={p.title} message={p.descText} />
  ));
  const newPostElement = React.createRef();

  const addPost = () => {
    const postMessage = newPostElement.current.value;
    alert(postMessage);
  };

  console.log("посты", posts);

  return (
    <div className={classes.main}>
      <h5 className={classes.title}>Мои посты</h5>
      <div>
        <div>
          <textarea
            className={classes.textarea}
            ref={newPostElement}
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
          <p className={classes.emptyArr}>У вас нет постов, но вы можете добавить новый</p>
        </div>
      ) : (
        <div className={classes.posts}>{postsElements}</div>
      )}
    </div>
  );
};

export default MyPosts;

/* {postsElements}
          <input value={value} onChange={inputValue} />
          <div>
            <input onClick={addPost} />
            Добавить элемент
          </div> */


          /* const [ arr,   setArr] = useState({});
  const [value, setValue] = useState(""); */

   /* const addPost = async () => {
    const { data } = await axios({
      url: "http://localhost:5000/api/posts",
      method: "POST",
      data: {
        postId: "",
        title: "",
        descText: "",
      },
    });
    setArr(data);
  }; 
  useEffect(() => {
    addPost();
  }, []); */


  /* const inputValue = (event) => {
    const postMessage = setValue(event.target.value);
    alert(postMessage);
  }; */