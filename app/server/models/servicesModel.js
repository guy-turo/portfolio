const mongoose = require('mongoose')
const schema = mongoose.Schema

const servicesSchema = new schema({
    userExp: {
        type: Array,
        required: true
    },
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
    }
}, { timestamps: true })

const ServicesModel = new mongoose.model('Services', servicesSchema)

module.exports = ServicesModel