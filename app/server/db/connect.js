require("dotenv").config()
const mongoose = require('mongoose')
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {})
            .then((result) => console.log('db connected'))
            .catch((err) => console.log(err.message))
    } catch (err) {
        console.error(err.message)
    }
}


module.exports = { connectDB }