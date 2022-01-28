const User = require('../models/users')

class ProfileService {

  async getProfileInfo (id) {
    //console.log(id)
    //const id = req.params.id
    const profileInfo = await User.findById(id);
    if (!profileInfo) {
         throw new Error( 'Информация не найдена')
    }
    return profileInfo;
  }
} 

module.exports = ProfileService 