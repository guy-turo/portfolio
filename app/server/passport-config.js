const bcrypt = require('bcrypt')
const localStrategy = require('passport-local').Strategy

const initializePassport = (passport, getUserByEmail, getUserById) => {
    const authenticateUser = async(email, password, done) => {
        const user = getUserByEmail(email)
        console.log(user)
        if (user === null) {
            return done(null, false, { message: "No user with that email" })
        }
        try {
            const checkPassword = await bcrypt.compare(password, user.password)
            if (checkPassword) {
                return done(null, user)
            } else {
                return done(null, false, { message: "password incorrect" })
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new localStrategy({ usernameField: "email" }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((user, done) => {
        return done(null, getUserById)
    })
}

module.exports = initializePassport