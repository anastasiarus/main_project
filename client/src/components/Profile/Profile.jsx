import React, { useState, useEffect, /* useContext */ } from 'react'
import classes from './Profile.module.css'
//import {AuthContext} from "../../context/AuthContext"
//import MyPosts from './MyPosts/MyPosts'
import axios from 'axios';

const Profile = () => {
     
  const [profile, setProfile] = useState([])
  //const {token} = useContext(AuthContext)

  const getProfileInfo = async () => {


    const {data} = await axios({
      url:'http://localhost:5000/api/profile',
      method:"POST",
      data:{
        id:"61e6bfd605b8154feae067db"
      }
    });
    setProfile(data);

   /*  const data = await fetch('http://localhost:5000/api/profile', {

      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json',
        //Authorization: `Bearer ${token}`
      },
      body: {
        id:'61e6bfd605b8154feae067db'
      }
    })
    console.log(data)
    setProfile(data.json()) */
    /* .then((res) => {
      if (!res.ok) {
        const response = res.json()
        throw new Error(  response.message ||  'Что-то пошло не так');
      }
      return res
    })
    .then((response) => response.json())
    .then(profileInfo => setProfile(profileInfo))
    .catch((e)=> console.log(e)) */
    
  }

    useEffect(() => {
      getProfileInfo()
    }, [])

   console.log('данные', profile)
   console.log('имя', profile.firstName)


     return (
    <div className={classes.main}>
      <p>Привет, {`${profile.firstName}`}</p>

       {/*  <div>
            <img className={classes.picture} src="https://s1.1zoom.ru/big3/729/354584-admin.jpg" alt="" />
        </div>
        <div>describtion</div>
        <MyPosts /> */}
        </div>
       
    )  
}

export default Profile;



/* const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch('http://localhost:5000/api/auth/register')
      .then(response => response.json())
      .then(data => setUsers(data))
    }
  
    useEffect(() => {
      fetchData()
    }, [])

  return (
      <div>
       {
            !users ? 'Loading' : 
            <div className={classes.cards}>
            <ul>
            { users.map(user => (
              <li className={classes.desc} key={user._id}>Name: {user.firstName} <br/>grudType: {user.lastName}</li>
            ))}
          </ul></div>
          }  
    </div> 
  ) */

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