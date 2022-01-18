import React from 'react'
import classes from './Setting.module.css'


const Setting = () =>{
    return (
    <div className={classes.main}>
        <div><img src="https://img.icons8.com/ios-glyphs/344/ffffff/paint-palette--v1.png"/><p>Внешний вид</p></div>
        <div><img src="https://img.icons8.com/ios-glyphs/344/ffffff/alarm.png"/><p>Уведомления</p></div>
        <div><img src="https://img.icons8.com/glyph-neue/344/ffffff/test-account.png"/><p>Аккаунт</p></div>
        <div><img src="https://img.icons8.com/material-sharp/344/ffffff/settings.png"/><p>Приложение</p></div>
        <div><img src="https://img.icons8.com/ios-glyphs/344/ffffff/lock--v1.png"/><p>Приватность</p></div>
             
    </div>
    )
}

export default Setting;