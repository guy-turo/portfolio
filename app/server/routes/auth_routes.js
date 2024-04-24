const authRoutes = require('express').Router()
const { login, signup, logout, recover } = require("../controllers/authController")
const passport = require('passport')

authRoutes.post("/login", passport.authenticate('local'), login)
authRoutes.route("/signup")
    .post(signup)

authRoutes.route("/logout")
    .get(logout)

authRoutes.route("/recover")
    .get(recover)


module.exports = { authRoutes }