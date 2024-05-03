if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require('express')
const session = require("express-session")
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const passport = require("passport")


require('express-async-errors')
require('dotenv').config()

const flash = require('express-flash')


const routePerson = require('./routes/persona_routes')
const pdfRoute = require('./routes/pdf_routes.js')
const authRoutes = require("./routes/auth_routes.js")

const bodyParser = require('body-parser')

const connect = require('./db/connect.js')
const cors = require('cors')
const app = express()
    // connect.connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(flash())

// const sessionStore = new MongoStore({
//     mongoUrl: process.env.MONGO_URI,
//     mongooseConnection: mongoose.connection,
// })
app.use(session({
    cookieName: "usersSession",
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    // store: sessionStore,
    httpOnly: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())


const version = '/api/v1/'
app.use(`${version}auth`, authRoutes.authRoutes)
app.use(`${version}me`, routePerson.personRoutes)
app.use(`${version}pdf`, pdfRoute.pdfRoute)
app.get("/", (req, res) => {
    if (req.session.viewCount) {
        req.session.viewCount = req.session.viewCount + 1
    } else {
        req.session.viewCount = 1
    }
    res.send(`${req.session.viewCount} times `)
})
const start = async() => {
    const port = process.env.PORT || 8000
    try {
        connect.connectDB()
        app.listen(port, () => {
            console.log(`server is running on port :${port}`)
        })
    } catch (error) {
        console.error(error.message)
    }
}
start()