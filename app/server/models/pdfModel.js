const mongoose = require('mongoose')
const schema = mongoose.Schema

const pdfSchema = new schema({
    fileName: {
        type: String,
        required: true,
    },
    pdfUrl: {
        type: String,
    },
}, { timestamps: true })

const PdfModel = mongoose.model('Pdf', pdfSchema)

module.exports = {
    PdfModel
}