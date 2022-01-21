import React from 'react'
import classes from './Setting.module.css'


const Setting = () =>{
    return (
    <div className={classes.main}>
        <div><img className={classes.icon} src="https://img.icons8.com/ios-glyphs/344/ffffff/paint-palette--v1.png"/><p className={classes.string}>Внешний вид</p></div>
        <div><img className={classes.icon} src="https://img.icons8.com/ios-glyphs/344/ffffff/alarm.png"/><p className={classes.string}>Уведомления</p></div>
        <div><img className={classes.icon} src="https://img.icons8.com/glyph-neue/344/ffffff/test-account.png"/><p className={classes.string}>Аккаунт</p></div>
        <div><img className={classes.icon} src="https://img.icons8.com/material-sharp/344/ffffff/settings.png"/><p className={classes.string}>Приложение</p></div>
        <div><img className={classes.icon} src="https://img.icons8.com/ios-glyphs/344/ffffff/lock--v1.png"/><p className={classes.string}>Приватность</p></div>
             
    </div>
    )
}

export default Setting;