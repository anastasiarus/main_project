const User = require('../models/users')

class PostsService {

  async getPosts (id) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
        throw new Error( 'Пользователь не найден')
    }

    const userPosts = user.posts
    if (!userPosts == []) {
      console.log("Нет постов")
    }

    const allPosts = await Promise.all(
      user.posts.map((id) => User.findById(id))
    );
    console.log('Все посты', allPosts)
    return allPosts;
  }

    async addPosts (id, postId) {
    //console.log(id)
    const user = await User.findById(id);
    if (!user) {
        throw new Error( 'Пользователь не найден')
    }
    const userPosts = user.posts
    userPosts.push(postId);
    const postsArray = await User.updateOne({posts: userPosts})
    return postsArray;
  } 

  async deletePosts (id, postId) {
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
  } 
} 

module.exports = PostsService 