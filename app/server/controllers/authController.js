const passport = require("passport")
const bcrypt = require("bcrypt")
const { UserModel } = require("../models/usersModel")
const initializePassport = require("../passport-config")
const { generateAccessToken, isValidEmail, isValidPassword } = require('../utility/helper')
const jwt = require("jsonwebtoken")
const { TokenModel } = require("../models/tokenModel")
require("dotenv").config()
initializePassport(
    passport,
)
const checkAuth = async(req, res) => {
    try {
        res.status(200).json("hello")
    } catch (error) {
        res.status(503).json({ message: "not found" })
    }
}
const token = async(req, res) => {
    try {
        const refreshToken = req.body.token
        if (refreshToken === null) return res.status(401)

        const tokens = await TokenModel.find()
        const tokenSaved = tokens[0].refreshToken
        if (tokenSaved !== refreshToken) return res.status(403)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(error, user) => {
            if (error) return res.status(403)
            const accessToken = generateAccessToken({ id: user.id, name: user.name, email: user.email, admin: user.admin })
            res.json({ accessToken: accessToken })
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const login = async(req, res) => {
    try {
        const { email: email, password: password } = req.body
        let crfToken
        if (!isValidEmail(email)) return res.Status(406).json({ message: "Provide correct email" })

        const checkEmail = await UserModel.findOne({ email: email })
        if (!checkEmail) return res.status(404).json({ message: "This email not exist" })
        bcrypt.compare(password, checkEmail.hash, async(error, result) => {
            if (error) {
                return res.status(401).json({ message: "Wrong password" })
            }
            if (result) {
                const user = { id: checkEmail._id, name: checkEmail.name, email: email, admin: checkEmail.isAdmin }
                const accessToken = generateAccessToken(user)
                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" })
                crfToken = refreshToken

                const checkToken = await TokenModel.find()
                if (checkToken.length !== 0) {
                    for (let i = 0; i < checkToken.length; i++) {
                        await TokenModel.deleteOne({ refreshToken: checkToken[i].refreshToken })
                    }
                }
                const newToken = new TokenModel({
                    refreshToken: refreshToken
                })
                newToken.save().then((response) => {
                    res.json({ accessToken: accessToken, refreshToken: refreshToken })
                }).catch((err) => {
                    if (err) {
                        console.log(err.message)
                    }
                })
            }
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }

}
const signup = async(req, res) => {
    const { name: name, email: email, password: password } = req.body
    try {
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const passwordChecked = isValidPassword(password)
        console.log(passwordChecked)
        if (passwordChecked === false) {
            return res.status(208).json({ message: "Please provide strong password" })

        } else {
            const hashPassword = await bcrypt.hash(password, salt)
            console.log(hashPassword)
            const checkAccount = await UserModel.findOne({ email: email })
            console.log(checkAccount)
            if (checkAccount !== null) {
                return res.status(200).json({ message: "Email already exist" })
            }
            const checkDb = await UserModel.find()
            if (checkDb.length === 0) {
                const user = new UserModel({
                    name: name,
                    email: email,
                    hash: hashPassword,
                    isAdmin: true,
                })
                user.save().then((result) => {
                    if (!result) {
                        return res.status(404).json({ message: "user not created" })
                    }
                    res.status(201).json(result)

                }).catch((error) => console.error(error.message))
            } else {
                const user = new UserModel({
                    name: name,
                    email: email,
                    hash: hashPassword,
                    isAdmin: false,
                })
                user.save().then((result) => {
                    if (!result) {
                        return res.status(404).json({ message: "user not created" })
                    }
                    res.status(201).json(result)

                }).catch((error) => console.error(error.message))
            }
        }
    } catch (err) {
        res.redirect("api/v1/auth/register")
    }
}
const recover = (req, res) => {
    res.send("recover")
}
const logout = async(req, res) => {
    const { token: token } = req.body
    try {
        await TokenModel.findOne({ refreshToken: token })
            .then((response) => {
                if (!response) return res.sendStatus(401)
                TokenModel.deleteOne({ refreshToken: response.refreshToken })
                    .then(data => {
                        if (data.deletedCount === 1) {
                            res.sendStatus(204)
                        }
                    })
                    .catch(err => res.sendStatus(404).json(err))
            })
            .catch((error) => {
                res.sendStatus(404).json(error)
            })
    } catch (error) {
        res.sendStatus(500)
    }
}
module.exports = { token, checkAuth, login, signup, recover, logout }