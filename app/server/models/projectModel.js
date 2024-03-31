const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = schema({
    title: { type: String },
    linkGithub: { type: String },
    linkLive: { type: String, },
    pictures: {
        type: String,
    }
})

const projectModel = mongoose.model('Projects', projectSchema)
module.exports = projectModel