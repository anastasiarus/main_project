import React, { useState, useEffect } from "react";
import classes from "./Friends.module.css";
import axios from "axios";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  //const {token} = useContext(AuthContext)

  const getFriends = async () => {
    const { data } = await axios({
      url: "http://localhost:5000/api/friends",
      method: "GET",
      data: {
        id: "61e7e142c2e7e99a72dc7d9e",
      },
    });
    setFriends(data);
  };
  useEffect(() => {
    getFriends();
  }, []);

  console.log("друзья", friends);

  return (
    <div className={classes.main}>
      <h5 className={classes.title}>Друзья</h5>
      {friends.length == 0 ? (
        <div>
          <p className={classes.emptyArr}>У вас нет друзей:((</p>
        </div>
      ) : (
        <div>
          <p className={classes.friends}>{`${friends}`}</p>
        </div>
      )}
    </div>
  );
};

export default Friends;
