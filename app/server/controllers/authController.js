const bcrypt = require("bcrypt")
const passport = require("passport")

const initializePassport = require("../passport-config")

initializePassport(
    passport,
    email => { return users.find(user => user.email === email) },
    id => { return users.find(user => user.id === id) }

)
let users = []

const login = async(req, res) => {
    if (req.user) {
        res.json(req.user)
    } else {
        res.status(503).send({ message: "not found" })
    }
}
const signup = async(req, res) => {
    try {
        console.log('try to log')
        bcrypt.hash(req.body.password, 10, (error, result) => {
            if (error) return "something went wrong"
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: result
            })
            res.status(200).json("registered")
        })

    } catch (err) {
        res.redirect("api/v1/auth/register")
    }
}
const recover = (req, res) => {
    res.send("recover")
}
const logout = (req, res) => {
    res.send("logout")
}



module.exports = { login, signup, recover, logout }