import React, { useState, useEffect } from "react";
import classes from "./Friends.module.css";
import axios from "axios";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const { data } = await axios({
      url: "http://localhost:5000/api/friends",
      method: "GET",
      /* data: {
        id: "61f12d369da960ccde66b9e9",
      }, */
    });
    setFriends(data);
  };
  useEffect(() => {
    getFriends();
  }, []);

 /*  const addPost = async () => {
    const response = await axios({
      url: "http://localhost:5000/api/friends",
      method: "POST",
      data: {
        id: "61e906356354c583e77e58d2",
      },
    });
    //alert(response.data.message)
    console.log('ответ', response.data.message)
  };
  useEffect(() => {
    addPost();
  }, []); 
 */
   
  //console.log("друзья", friends);

  return (
    <div className={classes.main}>
      <h5 className={classes.title}>Друзья</h5>
      {friends.length == 0 ? (
        <div>
          <p className={classes.emptyArr}>У вас нет друзей:((</p>
        </div>
      ) : (
        <div>
           { friends.map(friend => (
              <li className={classes.friends} key={friend._id}>{friend.firstName} {friend.lastName} </li>
           ))}
           {/* <button className={classes.btn} onClick={addPost}>
            Добавить
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Friends;



/* // Добавление пользователя
   async function CreateUser(userName, userAge) {
  
    const response = await fetch("api/users", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            name: userName,
            age: parseInt(userAge, 10)
        })
    });
    if (response.ok === true) {
        const user = await response.json();
        reset();
        document.querySelector("tbody").append(row(user));
    }
}

// Удаление пользователя
async function DeleteUser(id) {
    const response = await fetch("/api/users/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const user = await response.json();
        document.querySelector("tr[data-rowid='" + user._id + "']").remove();
    }
} */
