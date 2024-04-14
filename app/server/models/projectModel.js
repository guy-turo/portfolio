const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = new schema({
    title: { type: String },
    linkGithub: { type: String },
    linkLive: { type: String, },
    pictures: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Images"
    },
})

const ProjectModel = new mongoose.model('Projects', projectSchema)
module.exports = ProjectModel