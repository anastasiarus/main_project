const Post = require('../models/posts');

class PostsService {

  async getPosts () {
      const post = await Post.find();
      if (!post) {
        console.log('Пост не найден')
      }
      return post;
  }

  async addPosts (id, descText) {
      const post = new Post({id, descText})
      await post.save()
      console.log('Пост добавлен')
  } 
    

  async deletePosts (id) {
    await Post.deleteOne({id})
    console.log('Пост удален')
  }
} 

module.exports = PostsService 
