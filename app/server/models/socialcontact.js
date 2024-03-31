const mongoose = require('mongoose')
const schema = mongoose.Schema

const socialContactSchema = schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
}, { timestamps: true })

const socialContactModel = mongoose.model('Socials', socialContactSchema)
module.exports = socialContactModel