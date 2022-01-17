import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () =>{
     
     return (
    <div className={classes.main}>
        <div>
            <img className={classes.picture} src="https://s1.1zoom.ru/big3/729/354584-admin.jpg" alt="" />
        </div>
        <div>describtion</div>
        <MyPosts />
        </div>
       
    )  
}

export default Profile;



/* const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch('http://localhost:5000/api/auth/register')
      .then(response => response.json())
      .then(data => setUsers(data))
    }
  
    useEffect(() => {
      fetchData()
    }, [])

  return (
      <div>
       {
            !users ? 'Loading' : 
            <div className={classes.cards}>
            <ul>
            { users.map(user => (
              <li className={classes.desc} key={user._id}>Name: {user.firstName} <br/>grudType: {user.lastName}</li>
            ))}
          </ul></div>
          }  
    </div> 
  ) */