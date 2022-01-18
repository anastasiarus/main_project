import React from 'react'
import classes from './Music.module.css'


const Music = () =>{
    return (
    <div className={classes.main}>
      <h4>Ты можешь послушать музыку <a href="https://music.youtube.com/" target="_blank" rel="noopener noreferrer">здесь.</a></h4>
    </div>
    )
}

export default Music;