const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    linkGithub: { type: String },
    linkLive: { type: String, },
    pictures: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
})

const ProjectModel = new mongoose.model('Projects', projectSchema)
module.exports = { ProjectModel }