const mongoose = require('mongoose')
const schema = mongoose.Schema

const socialContactSchema = new schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
}, { timestamps: true })

const SocialContactModel = new mongoose.model('Socials', socialContactSchema)
module.exports = SocialContactModel