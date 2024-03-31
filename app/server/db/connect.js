const mongoose = require('mongoose')
const connectDB = async(url) => {
    try {
        await mongoose.connect(url, {})
            .then((result) => console.log('db connected'))
            .catch((err) => console.log(err.message))
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = { connectDB }