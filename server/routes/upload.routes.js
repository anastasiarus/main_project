const {Router} = require('express')
const upload = require('../middlewares/upload.middleware')
const User = require('../models/users');

const uploadRouter = Router();

 uploadRouter.post('/', upload.single('ava'), async (req, res) => {
    try {
       // console.log('file', req.file)
        //console.log('body',req.body)
        if (req.file) {
            //const {id} = req.body
            await User.findByIdAndUpdate(req.params.id, {ava: req.file.filename}) 
            res.status(200).json(req.file)
        } else {
            console.log('файл не загрузился')
        }
    } catch (e) {
        console.log(e)
    }
}); 

module.exports = uploadRouter;



/* try {
    if (req.file) {
        res.json({ava: req.file.path})
        res.json(req.file)
        } else {
            console.log('файл не загрузился')
        }
} catch(e) {
    console.log(e)
} */