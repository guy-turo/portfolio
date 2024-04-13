const mongoose = require('mongoose')
const schema = mongoose.Schema

const profileImageSchema = new schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }, { timestamps: true })
    // Projects
const projectImageSchema = new schema({
        ...profileImageSchema.obj,
    }, { timestamps: true })
    // testimonials
const testimonialImageSchema = new schema({
    ...profileImageSchema.obj
}, { timestamps: true })
const ProfileImagesModel = mongoose.model('ProfileImages', profileImageSchema)
const ProjectImagesModel = mongoose.model('ProjectImages', projectImageSchema)
const TestimonialsImagesModel = mongoose.model('TestimonialsImages', testimonialImageSchema)

module.exports = {
    TestimonialsImagesModel,
    ProfileImagesModel,
    ProjectImagesModel,
}