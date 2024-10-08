const { PdfModel } = require('../models/pdfModel')
const { getCloudinaryImagePath } = require('../utility/helper')
const cloudinary = require('cloudinary').v2


const pdfUpload = async(req, res, next) => {
    console.log('pdf Uploading...')
    try {
        const file = req.file
        const { public_id, url } = req.file
        if (!file && !file.path && !file.originalname) {
            const error = new Error("please upload a file")
            error.httpStatusCode = 400
            return next(error)
        }

        const newPdf = new PdfModel({
            fileName: req.file.originalname,
            pdfUrl: file.path,
            downloadNumber: 0
        })
        await newPdf.save()
            .then((response) => {
                res.status(200).json(file)
                console.log("uploaded")
            })
    } catch (e) {
        res.status(500).json({ message: 'unable to to upload image' })
    }
}
const updatePdf = async(req, res) => {
    console.log("updating...")
    try {
        const { id: id } = req.params
        const data = await PdfModel.findById({ _id: id })
        if (!data) {
            return res.status(404).json({ message: "Item not fount" })
        }

        if (req.file) {
            let newPdfId = getCloudinaryImagePath(data.pdfUrl)
            await cloudinary.uploader.destroy(newPdfId)
            console.log("last pdf has been deleted")
        }
        let name
        if (req.file.url) {
            name = req.file.originalname
        } else {
            name = req.body.fileName
        }

        const newData = {
            $set: {
                fileName: name,
                pdfUrl: req.file.path || data.pdfUrl,
                downloadNumber: data.downloadNumber
            }
        }
        const update = await PdfModel.updateMany({ _id: id }, newData, { new: true }, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!")
            }
        })
        if (update.modifiedCount === 1) {
            res.status(200).json({ message: 'Item updated successfully' })
            console.log('updated successfully')
        } else {
            console.log("failed")
        }
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const deletePdf = async(req, res) => {
    const { id: id } = req.params
    try {
        const pdf = await PdfModel.findById({ _id: id })
        if (!pdf) {
            console.log('Not Found')
            res.status(404).json({ message: "pdf not found" })
        }
        if (pdf.pdfUrl !== '') {
            const publicId = getCloudinaryImagePath(pdf.pdfUrl)
            result = await cloudinary.uploader.destroy(publicId);
            if (result.result === 'ok') {
                console.log("pdf deleted")
            } else {
                console.log("Can't delete pdf")
            }
        }
        await PdfModel.deleteOne({ _id: id })
            .then(re => {
                console.log(res)
                res.status(200).json({ message: 'pdf deleted' })
            })
            .catch(e => console.log(e))

    } catch (error) { res.status(500).json({ message: error.message }) }
}
const downloadPdf = async(req, res) => {
    console.log("downloading...")
    const id = req.params.urlPdf
    try {
        const response = await PdfModel.findById({ _id: req.params.urlPdf })
        if (response !== null) {
            const filter = { _id: id }
            const update = { $inc: { downloadNumber: 1 } }
            const result = await PdfModel.updateOne(filter, update)
            if (result) {
                res.status(200).json('downloaded')
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error downloading PDF');
    }
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
        if (pdf === null || pdf === undefined) {
            return res.status(404).json({ message: 'Pdf not found' })
        }
        res.status(200).json(pdf[0])
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Failed to retrieve the data" })
    }
}
module.exports = {
    downloadPdf,
    pdfUpload,
    updatePdf,
    deletePdf,
    fetchSinglePdf,
    fetchPdf,
}