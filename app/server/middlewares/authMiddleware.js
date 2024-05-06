require("dotenv").config()
const jwt = require("jsonwebtoken")
module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({ message: "You are not authorized to view this resource" })
    }
}
module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin) {
        next()
    } else {
        res.status(401).json({ message: "You are not authorized to view this resource" })
    }
}
module.exports.authenticateToken = (req, res, next) => {
    console.log("hello")
    const authHeader = req.headers["Authorization"]

    const token = authHeader && authHeader.split(" ")[1]
    if (token === null) return res.status(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403)
        req.user = user
        next()
    })
}