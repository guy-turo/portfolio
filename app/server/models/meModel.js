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
    pictures: {
        type: String,
        required: true,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Projects",
    }],
    testimonial: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Testimonials",
    }],
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Services",
    }],

    socials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Socials"
    }],
    experiences: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experiences',
    }],

}, { timestamps: true })

const meModel = mongoose.model('Me', meSchema)
module.exports = meModel