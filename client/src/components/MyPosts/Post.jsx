import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {

    return (
    <div className={classes.item}>
        <img src="https://instagram-my.ru/wp-content/uploads/2019/12/ava-for-insta02.jpg"></img>
        {props.message}
        <div>
            <span>Like </span> 
        </div>
    </div>
    )
    
}

export default Post;