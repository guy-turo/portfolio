require("dotenv").config({ path: ".env.development.local" })
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
    const authHeader = req.headers.authorization
    if (authHeader && authHeader.startsWith("Bearer ")) {

        const token = authHeader.split(" ")[1]
        try {
            const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            req.user = decode
            console.log(req.user)
            next()
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: "Unauthorized: Token expired" })
            }
            return next(error)
        }
    } else {
        return res.status(401).json({ message: "Unauthorized : Missing token" })
    }
}