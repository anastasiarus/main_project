import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post'

const MyPosts = () =>{

    let posts = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Woooow'}
    ]

    let postsElements = posts.map(post => <Post key={post.id} message={post.message} />)
   
    let newPostElement = React.createRef()

    
    const addPost = () => {
        const postMessage = newPostElement.current.value
        alert(postMessage)
    }

    return (
        <div className={classes.main}>
            <h5 className={classes.title}>Мои посты</h5>
            <div>
            <div><textarea className={classes.textarea} ref={newPostElement} placeholder="Добавь новый пост..."></textarea></div>
            <div> <button className={classes.btn} onClick={addPost}>Добавить запись</button></div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        {/* <Post message="Hi"/>
        <Post message="WOOOOOW"/> */}
        </div>
        </div>
       
    )
}

export default MyPosts;