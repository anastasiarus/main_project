const User = require('../models/users')

class FriendsService {

  async getFriends (id) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
        throw new Error( 'Пользователь не найден')
    }
    const userFriends = user.friends
    if (!userFriends == []) {
      console.log("Нет друзей")
    }
    const allFriends = userFriends.map(friend => User.findById(friend.id).then(doc => {
      allFriends.push(doc);
    }))
    console.log('все друзья', allFriends)
    return allFriends;

    //const allFriends = userFriends.map(friend => User.findById({id: +friend}))
  }

  async addFriends (id, friendId) {
    //console.log(id)
    const user = await User.findById(id);
    //const friend = await User.findById(friendId);
    if (!user) {
        throw new Error( 'Пользователь не найден')
    }
    const userFriends = user.friends
    userFriends.push(friendId);
    const friendsArray = await User.updateOne({friends: userFriends})
    console.log('Друг добавлен')
    return friendsArray;
  } 

   async deleteFriends (id, friendId) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
        throw new Error( 'Пользователь не найден')
    }

    const userFriends = user.friends
    userFriends.remove(friendId);
    const friendsArray = await User.updateOne({friends: userFriends})
    console.log('Друг удален')
    return friendsArray;
  }  
} 

module.exports = FriendsService 