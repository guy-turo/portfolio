const mongoose = require('mongoose')
const schema = mongoose.Schema

const imagesSchema = schema({
    title: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const imagesModel = mongoose.model('Images', imagesSchema)

module.exports = imagesModel