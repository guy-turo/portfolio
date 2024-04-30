const mongoose = require("mongoose")
const schema = mongoose.Schema

const UserSchema = new schema({
    name: { type: String },
    email: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true })
const UserModel = new mongoose.model("User", UserSchema)

module.exports = { UserModel }