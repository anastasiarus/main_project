
const Post = require('../models/posts')

class PostsService {

  async getPosts () {
      const post = await Post.find();
      if (!post) {
        throw new Error('Пост не найден')
      }
      return post;
  }

  async addPosts (descText) {
      const post = new Post({descText})
      await post.save()
      console.log('Пост добавлен')
  } 
    
} 

module.exports = PostsService 

/* async deletePosts (id, postId) {
  //console.log(id)
  const user = await User.findById(id);
  if (!user) {
      throw new Error( 'Пользователь не найден')
  }

  const userPosts = user.posts
  userPosts.remove(postId);
  const postsArray = await User.updateOne({posts: userPosts})
  console.log('Пост удален')
  return postsArray;
}  */