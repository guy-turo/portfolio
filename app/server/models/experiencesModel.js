const mongoose = require('mongoose')
const schema = mongoose.Schema

const experiencesSchema = schema({
    frontEnd: {
        type: Array,
        required: true,
    },
    backend: {
        type: Array,
        required: true,
    },
    other: {
        type: Array,
        required: true,
    }
}, { timestamps: true })

const experiencesModel = mongoose.model('Experiences', experiencesSchema)

module.exports = experiencesModel