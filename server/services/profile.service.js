const User = require('../models/users')

class ProfileService {

  async getProfileInfo (id) {
    console.log(id)
    const profileInfo = await User.findById(id);
    if (!profileInfo) {
        throw new Error( 'Что-то пошло не так')
    }
    return profileInfo;
  }
} 

module.exports = ProfileService 