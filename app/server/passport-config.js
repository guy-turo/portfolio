const bcrypt = require('bcrypt')
const localStrategy = require('passport-local').Strategy
const { UserModel } = require("./models/usersModel")

const initializePassport = (passport) => {
    const authenticateUser = async(email, password, done) => {
        const user = await UserModel.findOne({ email: email })

        if (!user) {
            return done(null, false, { message: "No user with that email" })
        }

        try {
            bcrypt.compare(password, user.hash, (error, result) => {
                console.log(password, user.hash)
                if (error) {

                    return done(null, false, { message: "password incorrect" })
                }
                if (result) {
                    return done(null, user)
                }
            })
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new localStrategy({ usernameField: "email" }, authenticateUser))
    passport.serializeUser((user, done) => {

        done(null, user)
    })
    passport.deserializeUser((id, done) => {

        UserModel.findById(id)
            .then(result => {

                done(result)
            })
    })
}

module.exports = initializePassport