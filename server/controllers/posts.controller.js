const PostsService  = require ("../services/posts.service");

class PostsController {

  service;
  constructor() {
    this.service = new PostsService();
  }

  async getPosts(req, res) {
    try {
      const posts = await this.service.getPosts(req.body);
      return res.status(200).json(posts);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async addPosts(req, res) {
    try {
      const {id, descText} = req.body;
      const userPost = await this.service.addPosts(id, descText);
      return res.status(200).json(userPost);
    } catch (e) {
      console.log(e);
    }
    return null;
  } 


   async deletePosts(req,res) {
    try {
      const {id} = req.body
      const userPost = await this.service.deletePosts(id)
      return res.status(200).json(userPost)
    } catch(e) {
      console.log(e)
    }
  } 


}
module.exports = PostsController
