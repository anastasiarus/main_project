const FriendsService  = require ("../services/friends.service");

class FriendsController {

  service;

  constructor() {
    this.service = new FriendsService();
  }

  async getFriends(req, res) {
    try {
      //console.log(req)
      const id = req.body;
      if (!id) {
        throw new Error( 'Что-то пошло не так')
      }
      const userInfo = await this.service.getFriends(req.body.id);
      return res.status(200).json(userInfo);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async addFriends(req, res) {
    try {
      const { id, friendId } = req.body;
      const userInfo = await this.service.addFriends(id, friendId);
      return res.status(200).json(userInfo);
    } catch (e) {
      console.log(e);
    }
    return null;
  } 

   async deleteFriends(req, res) {
    try {
      const { id, friendId } = req.body;
      const userInfo = await this.service.deleteFriends(id, friendId);
      return res.status(200).json(userInfo);
    } catch (e) {
      console.log(e);
    }
    return null;
  } 

}
module.exports = FriendsController