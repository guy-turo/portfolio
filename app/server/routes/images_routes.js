const imagesRoute = require('express').Router()
const { createImages, fetchImage, fetchImages, updateImage, deleteImage } = require('../controllers/imagesController')

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// })

// const storage = new CloudinaryStorage({
//         cloudinary,
//         params: {
//             folder: "Images",
//             allowFormats: ['jpeg', 'png', 'jpg']
//         }
//     })


imagesRoute.route('/upload')
    .post(createImages)
imagesRoute.route('/')
    .get(fetchImages)
imagesRoute.route('/:id')
    .get(fetchImage)
    .put(updateImage)
    .delete(deleteImage)

module.exports = { imagesRoute }