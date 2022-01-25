const {Router} = require('express')
const  PostsController = require('../controllers/posts.controller')

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.get('/', (req, res) => postsController.getPosts(req, res));
postsRouter.post('/', (req, res) =>postsController.addPosts(req, res));
//postsRouter.delete('/', (req, res) => postsController.deletePosts(req, res));

module.exports = postsRouter; 
