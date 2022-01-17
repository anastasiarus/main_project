import React from 'react'
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";


const Navbar = () =>{
    return (
    <nav className={classes.nav}>
        <div className={classes.item}><Link to='profile' >Профиль</Link></div>
        <div className={classes.item} ><Link to='/messages'>Сообщения</Link></div>
        <div className={classes.item}><Link to='/friends'>Друзья</Link></div>
        <div className={classes.item} ><Link to='/news'>Новости</Link></div>
        <div className={classes.item}><Link to='/music'>Музыка</Link></div>
        <div className={classes.item}><Link to='/setting'>Настройки</Link></div>
    </nav>
    )
}

export default Navbar;