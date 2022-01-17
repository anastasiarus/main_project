import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post'
//import {NavLink } from "react-router-dom";

const MyPosts = () =>{
    return (
        <div>
            My posts
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Добавить запись</button>
        </div>
        <div className={classes.posts}>
        <Post message="Hi"/>
        <Post message="WOOOOOW"/>
        </div>
        </div>
       
    )
}

export default MyPosts;