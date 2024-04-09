const imagesRoute = require('express').Router()

const { imageUpload, createImages, fetchImage, fetchImages, updateImage, deleteImage } = require('../controllers/imagesController')

const multer = require('multer');
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')


require('dotenv').config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "Images",
        allowFormats: ['jpeg', 'png', 'jpg']
    }
})

const upload = multer({ storage })
    // const storage = multer.diskStorage({
    //     destination: './uploads/',
    //     filename: function(req, file, cb) {
    //         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //         cb(null, file.fieldname + '-' + uniqueSuffix)
    //     }
    // })
    // const fileFilters = (req, file, cb) => {
    //     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //     }
    // }
    // const upload = multer({
    //     storage: storage,
    //     fileFilter: fileFilters,
    //     limits: {
    //         fileSize: 1024 * 1024 * 5, // 5Mb file size limit
    //     },
    // });


imagesRoute.post('/upload', upload.single("file"), imageUpload)

imagesRoute.route('/')
    .get(fetchImages)
imagesRoute.route('/:id')
    .get(fetchImage)
    .put(updateImage)
    .delete(deleteImage)

module.exports = { imagesRoute }