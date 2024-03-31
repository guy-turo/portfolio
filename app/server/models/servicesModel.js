const mongoose = require('mongoose')
const schema = mongoose.Schema

const servicesSchema = schema({
    userExp: {
        type: Array,
        required: true
    },
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
    }
}, { timestamps: true })

const servicesModel = mongoose.model('Services', servicesSchema)

module.exports = servicesModel