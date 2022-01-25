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
      const {descText} = req.body;
      const userPost = await this.service.addPosts(descText);
      return res.status(200).json(userPost);
    } catch (e) {
      console.log(e);
    }
    return null;
  } 

}
module.exports = PostsController

 /*async deletePosts(req, res) {
  try {
    const { id, postId } = req.body;
    const userPost = await this.service.deletePosts(id, postId);
    return res.status(200).json(userPost);
  } catch (e) {
    console.log(e);
  }
  return null;
}   */