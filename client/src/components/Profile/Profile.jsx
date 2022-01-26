import React, { useState, useEffect, useCallback} from "react";
import classes from "./Profile.module.css";
//import {AuthContext} from "../../context/AuthContext"
import axios from "axios";
import avatar from "../../images/users.png";
import ProfileStatus from "./ProfileStatus";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [img, setImg] = useState(null)
  const [ava, setAva] = useState(null)
  //const {token} = useContext(AuthContext)

  const getProfileInfo = async () => {
    const { data } = await axios({
      url: "http://localhost:5000/api/profile",
      method: "POST",
      data: {
        id: "61f12d369da960ccde66b9e9",
      },
      //Authorization: `Bearer ${token}`
    });
    setProfile(data);
  };
  useEffect(() => {
    getProfileInfo();
  }, []);

  //console.log(token)
  //console.log('данные', profile)

  const sendFile = useCallback(async() => {
    try{
      const data = new FormData()
      data.append('ava', img)
      await axios({
        url: "http://localhost:5000/api/apload",
        method: "POST",
        data: {
          //id: "61f12d369da960ccde66b9e9",
        },
      })
      .then(res => setAva(res.data.path))
    } catch(e){
      console.log('Аватар не загрузился', e)
    }
  }, [img])


  return (
    <div className={classes.main}>
      <div className={classes.avatar}>
      {
        ava 
        ? <img className={classes.ava} src={ava} alt="" /> 
        : <img className={classes.ava} src={avatar} alt="" /> 
      }
      <input className={classes.inputAva} type="file" onChange={e => setImg(e.target.files[0])}/>
      <button className={classes.btn} onClick={sendFile}>Изменить аватар</button>
      </div>
      <p className={classes.name} >{`${profile.firstName} ${profile.lastName}`}</p>
      <p className={classes.email} >{` Вы можете написать мне сюда: ${profile.email}`}</p>
      <ProfileStatus />
    
    </div>
  );
};

export default Profile;


/* const fetchInfo = () => {
    fetch('http://localhost:5000/api/profile')
    .then(async (res) => {
      if (res.status !== 200) {
        const response = await res.json()
        throw new Error( response.message || 'Что-то пошло не так');
      }
      return res
    })
    .then((response) => response.json())
    .catch((e)=> console.log(e))
  }  */
