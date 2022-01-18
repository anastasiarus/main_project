const ProfileService  = require ("../services/profile.service");

class ProfileController {

  service;

  constructor() {
    this.service = new ProfileService();
  }

  async getProfileInfo(req, res) {
    try {
      console.log(req)
        const profileInfo = await this.service.getProfileInfo(req.body.id);
        return res.status(200).json(profileInfo);
    } catch (e) {
      console.log(e);
    }
    return null;
  }
} 

module.exports = ProfileController


