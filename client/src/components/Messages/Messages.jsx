import React, {useState, useEffect} from 'react'
import classes from './Messages.module.css'
import axios from "axios"


const Messages = () =>{

  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const { data } = await axios({
      url: "http://localhost:5000/api/friends",
      method: "GET",
    });
    setFriends(data);
  };
  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {      
    document.title = `Сообщения`;  
  });

    return (
    <div className={classes.main}>
       <div className={classes.dialogs}>
            <div className={classes.item} >
           { friends.map(friend => (
              <li className={classes.friends} key={friend._id}>{friend.firstName} {friend.lastName} </li>
           ))}
            </div>
       </div>
       <div className={classes.messages}>
        <div className={classes.message}>
            Привет
        </div>
        <div className={classes.message}>
            Как дела?
        </div>
       </div>
    </div>
    )
}

export default Messages;