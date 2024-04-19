const express = require('express')
require('express-async-errors')
require('dotenv').config()


const routePerson = require('./routes/persona_routes')
const pdfRoute = require('./routes/pdf_routes.js')

const bodyParser = require('body-parser')

const connect = require('./db/connect.js')
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const version = '/api/v1/'
app.use(`${version}me`, routePerson.personRoutes)
app.use(`${version}pdf`, pdfRoute.pdfRoute)
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