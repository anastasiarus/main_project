import React from "react";
import classes from './MainPage.module.css';
 import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header'; 
 import Profile from "../../components/Profile/Profile";
import Messages from "../../components/Messages/Messages";
import { Routes, Route } from "react-router-dom"; 
import Setting from "../../components/Setting/Setting";

export const MainPage = () => {
    return (
       <div className={classes.appWrapper}>
      <Header />
      <Navbar /> 
      <div className={classes.appWrapperContent}>
         <Routes>
          <Route  path="/profile"  element={<Profile />}/>
          <Route  path="/messages"  element={<Messages />}/>
          <Route  path="/setting"  element={<Setting />}/>
        </Routes> 
      </div>
      </div> 
    )
}


//export default MainPage