const {Router} = require('express')
const  FriendsController = require('../controllers/friends.controller')

const friendsRouter = Router();
const friendsController = new FriendsController();


friendsRouter.get('/', (req, res) => friendsController.getAllUsers(req, res))
//friendsRouter.get('/', (req, res) => friendsController.getFriends(req, res));
friendsRouter.post('/', (req, res) => friendsController.addFriends(req, res));
friendsRouter.delete('/', (req, res) => friendsController.deleteFriends(req, res));

module.exports = friendsRouter; 
