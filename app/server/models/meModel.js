const mongoose = require('mongoose')
const schema = mongoose.Schema

const meSchema = new schema({
    fullName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    experienceYear: {
        type: String,
        required: true,
    },
    clients: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    projects: { type: String, },
    pictures: {
        type: Array,
    },


}, { timestamps: true })

const MeModel = new mongoose.model('Me', meSchema)
module.exports = MeModel