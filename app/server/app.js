const express = require('express')
require('express-async-errors')
require('dotenv').config()
const fileupload = require('express-fileupload')

const routePerson = require('./routes/persona_routes')
const imagesRoute = require('./routes/images_routes')

const bodyParser = require('body-parser')
const connect = require('./db/connect.js')
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(fileupload({
    createParentPath: true,
    limits: { fileSize: 5000000 }
}))

const version = '/api/v1/'
app.use(`${version}me`, routePerson.personRoutes)
app.use(`${version}images`, imagesRoute.imagesRoute)
const start = async() => {
    const port = process.env.PORT || 8000

    try {
        await connect.connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is running on port :${port}`)
        })
    } catch (error) {
        console.error(error.message)
    }
}
start()