const { PdfModel } = require('../models/pdfModel')
const { getCloudinaryImagePath } = require('../utility/helper')
const cloudinary = require('cloudinary').v2


const pdfUpload = async(req, res, next) => {
    console.log('pdf Uploading...')
    try {
        const file = req.file

        if (!file && !file.path && !file.originalname) {
            const error = new Error("please upload a file")
            error.httpStatusCode = 400
            return next(error)
        }

        const newPdf = new PdfModel({
            fileName: req.file.originalname,
            pdfUrl: file.path,
        })
        console.log(newPdf)
        await newPdf.save()

        res.status(200).json(file)
        console.log("uploaded")
    } catch (e) {
        res.status(500).json({ message: 'unable to to upload image' })
    }

}
const updatePdf = async(req, res) => {
    try {
        const { id: id } = req.params
        const data = await PdfModel.findById(id)

        if (!data) {
            return res.status(404).json({ message: "Item not fount" })
        }

        let newPdfId = getCloudinaryImagePath(data.pdfUrl)
        if (newPdfId) {
            await cloudinary.uploader.destroy(newImageId)
        }
        data.fileName = req.file.fileName || data.fileName
        data.pdfUrl = req.file.path || data.pdfUrl

        await data.save()
        res.status(200).json({ message: 'Item updated successfully' })
        console.log('updated successfully')
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const deletePdf = async(req, res) => {
    const { id: id } = req.params
    try {
        const pdf = await PdfModel.findById({ _id: id })
        if (!pdf) {
            res.status(404).json({ message: "Image not found" })
        }

        const publicId = getCloudinaryImagePath(pdf.pdfUrl)
        result = await cloudinary.uploader.destroy(publicId);
        if (result.result === 'ok') {
            await PdfModel.deleteOne({ _id: id })
            res.status(200).json({ message: "image deleted" })
        } else {
            res.status(404).json({ message: 'Error deleting image' });
        }
        console.log("deleted")
    } catch (error) { res.status(500).json({ message: error.message }) }
}

const fetchSinglePdf = async(req, res) => {
    try {
        const pdf = await imagesModel.findById(req.params.Id)
        if (!pdf) {
            return res.status(404).json({ message: 'Image not found' })
        }
        const imageUrl = cloudinary.image(item.imageId, { width: 400 })
        res.json({...item, imageUrl })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Failed to retrieve the data" })
    }
}
const fetchPdf = async(req, res) => {
    try {
        const pdf = await PdfModel.find()
        if (!pdf) {
            return res.status(404).json({ message: 'Image not found' })
        }
        res.status(200).json(pdf)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Failed to retrieve the data" })
    }
}
module.exports = {
    pdfUpload,
    updatePdf,
    deletePdf,
    fetchSinglePdf,
    fetchPdf,
}