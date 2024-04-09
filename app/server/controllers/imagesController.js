const imagesModel = require('../models/picturesModel')
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const path = require('path')
const process = require('process')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
require('dotenv').config()
    // cloudinary.config({
    //     cloud_name: process.env.CLOUD_NAME,
    //     api_key: process.env.CLOUDINARY_API_KEY,
    //     api_secret: process.env.CLOUDINARY_API_SECRET,
    // })

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: "Images",
//         allowFormats: ['jpeg', 'png', 'jpg']
//     }
// })

// images
let filePath
const imageUpload = async(req, res, next) => {

    // if (!file) {
    //     const error = new Error("please upload a file")
    //     error.httpStatusCode = 400
    //     return next(error)
    // }
    console.log(req.file)
        // upload(req, res, function(error) {

    //     if (error instanceof multer.MulterError) {
    //         return res.status(500).json(error)
    //     } else if (error) {
    //         return res.status(500).json(error)
    //     }
    //     filePath = req.files.file.path
    //     console.log(filePath)
    // })
}
const createImages = async(req, res) => {
        upload.single('image')(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            filePath = req.file.name
            console.log(filePath)
        })
        try {

            if (!req.files || req.files.Image) {
                res.status(400).json({
                    message: 'No file uploaded',
                })
            }
            const uploadedFile = req.files.Image
            console.log(uploadedFile)
            const uploadResult = await cloudinary.uploader.upload(uploadedFile.tempFilePath)
            const newImage = new imagesModel({
                title: req.body.title,
                description: req.body.description,
                imageId: uploadResult.public_id
            })
            await newImage.save()
            res.status(201).json({ message: "Image uploaded successfully!" })
        } catch (error) {
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
        const images = await imagesModel.find()
        if (!images) {
            return res.status(404).json({ message: 'Image not found' })
        }
        const imageUrl = cloudinary.image(images.imageId, { width: 400 })
        res.json({...images, imageUrl })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Failed to retrieve the data" })
    }
}

module.exports = { imageUpload, createImages, updateImage, deleteImage, fetchImages, fetchImage }