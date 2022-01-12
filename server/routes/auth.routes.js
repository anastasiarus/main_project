const { Router } = require("express");
const Users = require("../models/users")
const router = Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require("express-validator")
const jwt = require ('jsonwebtoken')
const config = require('config')


router.post('/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальное количество символов 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }
            const { email, password } = req.body
            const candidate = await Users.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: "Такой пользователь уже сущесвует" })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new Users({ email, password: hashedPassword })

            await user.save()
            res.status(201).json({ message: "Пользователь создан" })

        } catch (e) {
            res.status(500).json({ massage: "Ошибка" })
        }
    })

router.post('/login', 
[
    check('email', 'Некорректный email').normalizeEmail().isEmail(),
    check('password', 'Введите правильный пароль').exists()
],
async (req, res) => {
    try {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {email, password} = req.body
        const user = await Users.findOne({email})
        if (!user) {
            return res.status(400).json({message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }

        const token = jwt.sign(
            {userId:user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (e) {
        res.status(500).json({ massage: "Ошибка" })
    }
})
module.exports = router