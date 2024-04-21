const authRoutes = require('express').Router()
const { login, signup, logout, recover } = require("../controllers/authController")


authRoutes.route("/login")
    .get(login)

authRoutes.route("/signup")
    .get(signup)

authRoutes.route("/logout")
    .get(logout)

authRoutes.route("/recover")
    .get(recover)


module.exports = { authRoutes }