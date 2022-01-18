const {Router} = require('express')
const ProfileController = require ("../controllers/profile.controller");
//const auth = require('../middlewares/auth.middleware')


const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.post('/', (req, res) => profileController.getProfileInfo(req, res));
//profileRouter.get('/', auth, (req, res) => profileController.getProfileInfo(req, res));

module.exports = profileRouter



