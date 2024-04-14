const mongoose = require('mongoose')
const schema = mongoose.Schema

const ExperiencesSchema = new schema({
    frontend: {
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

const ExperiencesModel = new mongoose.model('Experiences', ExperiencesSchema)

module.exports = { ExperiencesModel }