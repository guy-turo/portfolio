const { ProfileImagesModel, TestimonialsImagesModel, ProjectImagesModel } = require('../models/picturesModel')

const cloudinary = require('cloudinary').v2
const multer = require('multer')

const { CloudinaryStorage } = require('multer-storage-cloudinary')
const TestimonialsModel = require('../models/testimonialsModel')
require('dotenv').config()
    // Profile

const imageUpload = async(req, res, next) => {

    try {
        const file = req.file

        if (!file && !filePath.path) {
            const error = new Error("please upload a file")
            error.httpStatusCode = 400
            return next(error)
        }

        const newImage = new ProfileImagesModel({
            title: req.body.title,
            description: req.body.description,
            imageUrl: file.path
        })

        await newImage.save()

        res.status(200).json(file)
        console.log("uploaded")
    } catch (e) {
        res.status(500).json({ message: 'unable to to upload image' })
    }

}

//cloudinary don't accept update func but we can delete and add it
const updateImage = async(req, res) => {
    try {
        const id = req.params.Id
        const image = await imagesModel.findById(itemId)

        if (!image) {
            return res.status(404).json({ message: "Item not fount" })
        }
        let newImageId = image.imageId
        if (req.files && req.files.Image) {
            const uploadedFile = req.files.Image
            if (newImageId) {
                await cloudinary.uploader.destroy(newImageId)
            }
            const uploadResult = await cloudinary.uploader.upload(uploadFile.tempFilePath)
            newImageId = uploadResult.public_id
        }
        item.title = req.body.title || item.title
        item.description = req.body.description || item.description
        item.imageId = newImageId

        await item.save()
        res.status(200).json({ message: 'Item updated successfully' })
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Error updating image" })
    }
}

const deleteImage = async(req, res) => {
    try {
        const id = req.params.Id;
        const image = await imagesModel.findById(id)
        if (!image) {
            return res.status(404).json({ message: "Item not found" })
        }
        const publicId = image.imageId;

        const deleteResult = await cloudinary.uploader.destroy(publicId)
        if (deleteResult.result === 'ok') {
            image.imageId = null;
            await image.save()
            res.status(200).json({ message: 'Image deleted successfully' })
        } else {
            res.status(400).json({ message: "Error deleting image" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error" })
    }
    res.send('delete')
}

const fetchImage = async(req, res) => {
    try {
        const image = await imagesModel.findById(req.params.Id)
        if (!image) {
            return res.status(404).json({ message: 'Image not found' })
        }
        const imageUrl = cloudinary.image(item.imageId, { width: 400 })
        res.json({...item, imageUrl })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Failed to retrieve the data" })
    }
}
const fetchImages = async(req, res) => {
    try {
        const images = await ProfileImagesModel.find()
        if (!images) {
            return res.status(404).json({ message: 'Image not found' })
        }

        res.status(200).json(images)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Failed to retrieve the data" })
    }
}


module.exports = {
    imageUpload,
    updateImage,
    deleteImage,
    fetchImages,
    fetchImage,
}