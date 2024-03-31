const mongoose = require('mongoose')
const schema = mongoose.Schema

const testimonialsSchema = schema({
    name: { type: String },
    title: { type: String },
    testimonial: { type: String, },
    pictures: {
        type: String,
    }
}, { timestamps: true })

const testimonialsModel = mongoose.model('Testimonial', testimonialsSchema)
module.exports = testimonialsModel