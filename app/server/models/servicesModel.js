const mongoose = require('mongoose')
const schema = mongoose.Schema

const servicesSchema = new schema({
    userExp: {
        type: Array,

    },
    frontend: {
        type: Array,

    },
    backend: {
        type: Array,

    },
    other: {
        type: Array,
    }
}, { timestamps: true })

const ServicesModel = new mongoose.model('Services', servicesSchema)

module.exports = { ServicesModel }