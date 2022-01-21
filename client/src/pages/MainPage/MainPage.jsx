import React from "react";
import classes from './MainPage.module.css';
import { Routes, Route } from "react-router-dom"; 
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header'; 
import Profile from "../../components/Profile/Profile";
import Messages from "../../components/Messages/Messages";
import Setting from "../../components/Setting/Setting";
import Music from "../../components/Music/Music";
import Friends from "../../components/Friends/Friends";
import MyPosts from "../../components/MyPosts/MyPosts";

export const MainPage = () => {
    return (
       <div className={classes.appWrapper}>
      <Header />
      <Navbar /> 
      <div className={classes.appWrapperContent}>
         <Routes>
          <Route  path="/profile"  element={<Profile />}/>
          <Route  path="/messages"  element={<Messages />}/>
          <Route  path="/friends"  element={<Friends />}/>
          <Route  path="/posts"  element={<MyPosts />}/>
          <Route  path="/music"  element={<Music />}/>
          <Route  path="/setting"  element={<Setting />}/>
        </Routes> 
      </div>
      </div> 
    )
}


//export default MainPage