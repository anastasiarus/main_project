import React from 'react'
import classes from './Setting.module.css'


const Setting = () =>{
    return (
    <div className={classes.main}>
        <div><img src="https://img.icons8.com/material-outlined/344/paint-palette.png"/><p>Внешний вид</p></div>
        <div><img src="https://img.icons8.com/ios-filled/344/topic-push-notification.png"/><p>Уведомления</p></div>
        <div><img src="https://img.icons8.com/glyph-neue/344/test-account.png"/><p>Аккаунт</p></div>
        <div><img src="https://img.icons8.com/material-outlined/344/settings--v1.png"/><p>Приложение</p></div>
        <div><img src="https://img.icons8.com/ios-glyphs/344/lock--v1.png"/><p>Приватность</p></div>
             
    </div>
    )
}

export default Setting;