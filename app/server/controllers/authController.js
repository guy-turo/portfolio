const bcrypt = require("bcrypt")
const passport = require("passport")
const { UserModel } = require("../models/usersModel")

const initializePassport = require("../passport-config")

initializePassport(
    passport,
    email => { return UserModel.findOne({ email: email }) },
    id => { return UserModel.findOne({ _id: id }) }
)
const login = async(req, res) => {
    if (req.user) {
        res.json(req.user)
    } else {
        res.status(503).send({ message: "not found" })
    }
}
const signup = async(req, res) => {
    const { name: name, email: email, password: password } = req.body
    try {
        console.log('try to log')
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashPassword = await bcrypt.hash(password, salt)

        console.log(hashPassword)
        const checkAccount = await UserModel.findOne({ email: email })
        if (checkAccount) {
            console.log("already exists")
            return res.status(200).json({ message: "Email already exist" })
        }
        const user = new UserModel({
            name: name,
            email: email,
            hash: hashPassword,
        })
        console.log(hashPassword)
        user.save().then((result) => {
            if (!result) {
                return res.status(404).json({ message: "user not created" })
            }
            res.status(201).json(result)
            console.log('createMe')
        }).catch((error) => console.error(error.message))

    } catch (err) {
        res.redirect("api/v1/auth/register")
    }
}
const recover = (req, res) => {
    res.send("recover")
}
const logout = (req, res) => {
    req.logout()
    res.redirect("protected-route")
}



module.exports = { login, signup, recover, logout }