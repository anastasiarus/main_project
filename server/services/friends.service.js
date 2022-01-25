const User = require('../models/users')

class FriendsService {


  async getAllUsers() {
    //console.log(id)
    const user = await User.find();
    if (!user) {
      throw new Error('Пользователи не найдены')
    }
    return user;
  }

  async getFriends(id) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
      throw new Error('Пользователь не найден')
    }
    const userFriends = user.friends
    if (!userFriends == []) {
      console.log("Нет друзей")
    }

    const allFriends = await Promise.all(user.friends.map((id) => User.findById(id)));

    console.log('все друзья', allFriends)
    return allFriends;
  }

  async addFriends(id, friendId) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
      throw new Error('Пользователь не найден')
    }
    const userFriends = user.friends
    userFriends.push(friendId);
    const friendsArray = await User.updateOne({ friends: userFriends })
    console.log('Друг добавлен')
    return friendsArray;
  }

  async deleteFriends(id, friendId) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
      throw new Error('Пользователь не найден')
    }
    const userFriends = user.friends
    userFriends.remove(friendId);
    const friendsArray = await User.updateOne({ friends: userFriends })
    console.log('Друг удален')
    return friendsArray;
  }
}

module.exports = FriendsService 