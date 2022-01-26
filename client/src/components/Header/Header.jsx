
import React, {useContext} from 'react';
import classes from  './Header.module.css'
import {AuthContext} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'


const Header = () =>{

    const history = useNavigate()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history('/')
    }
    return (
    <header className={classes.header}>
       <img className={classes.image} src='https://img.icons8.com/material-rounded/344/ffffff/home-page.png'></img>
       {/* <h4 className={classes.title}>PUSSY POWER</h4> */}
        <div className={classes.log}><a href="/" onClick={logoutHandler}>Выйти</a></div>
        
    </header>
    )
}

export default Header;