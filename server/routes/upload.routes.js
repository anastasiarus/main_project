const {Router} = require('express')
const fileMiddleware = require('../middlewares/upload.middleware');
//const User = require('../models/users');

const uploadRouter = Router();

uploadRouter.post('/', fileMiddleware.single('ava'), async (req, res) => {
    try {
        if(req.file) {
            res.json(req.file)
        } else {
            console.log('файл не загрузился')
        }
    } catch(e) {
        console.log(e)
    }
});

module.exports = uploadRouter; 



/* try {
    if(req.file) {
        const {id} = req.body
        await User.findOneAndUpdate({_id: id}, {ava: req.file.filename})
        res.json(req.file)
    } else {
        console.log('файл не загрузился')
    }
} catch(e) {
    console.log(e)
} */