const mongoose = require('mongoose')
const schema = mongoose.Schema

const testimonialsSchema = schema({
    name: { type: String },
    title: { type: String },
    testimonial: { type: String, },
    pictures: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Images"
    },
}, { timestamps: true })

const testimonialsModel = mongoose.model('Testimonial', testimonialsSchema)
module.exports = testimonialsModel