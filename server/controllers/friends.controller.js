const FriendsService  = require ("../services/friends.service");

class FriendsController {

  service;

  constructor() {
    this.service = new FriendsService();
  }

  async getFriends(req, res) {
    try {
      const users = await this.service.getFriends(req.body);
      return res.status(200).json(users);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async deleteFriends(req,res) {
    try {
      const {id} = req.body
      const userFriend = await this.service.deleteFriends(id)
      return res.status(200).json(userFriend)
    } catch(e) {
      console.log(e)
    }
  } 

  /* async addFriends(req, res) {
    try{
      const {id} = req.body
      const userFriend= await this.service.addFriends(id)
      return res.status(200).json(userFriend)
    } catch(e){
      console.log(e)
    }
  } */

 /*  async getFriends(req, res) {
    try {
      console.log(req)
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
      const userInfo = await this.service.addFriends(req.body.id, req.body.friendId);
      return res.status(200).json(userInfo);
    } catch (e) {
      console.log(e);
    }
    return null;
  } 

   async deleteFriends(req, res) {
    try {
      const userInfo = await this.service.deleteFriends(req.body.id, req.body.friendId);
      return res.status(200).json(userInfo);
    } catch (e) {
      console.log(e);
    }
    return null;
  }  */

}
module.exports = FriendsController