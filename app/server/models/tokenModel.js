const mongoose = require("mongoose")
const schema = mongoose.Schema

const tokenSchema = new schema({
    refreshToken: { type: String },
}, { timestamps: true })
const TokenModel = new mongoose.model("Token", tokenSchema)

module.exports = { TokenModel }