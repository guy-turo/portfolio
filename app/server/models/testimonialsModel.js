const mongoose = require('mongoose')
const schema = mongoose.Schema

const testimonialsSchema = new schema({
    name: { type: String },
    title: { type: String },
    testimonials: { type: String, },
    pictures: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Images"
    },
}, { timestamps: true })

const TestimonialsModel = new mongoose.model('Testimonial', testimonialsSchema)
module.exports = TestimonialsModel