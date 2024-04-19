const imagesRoute = require('express').Router()

const {
    imageUpload,
    fetchImage,
    fetchImages,
    updateImage,
    deleteImage,
} = require('../controllers/imagesController')

const { upload } = require('../utility/helper')
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


imagesRoute.post('/profileImage/upload', upload.single("file"), imageUpload)

imagesRoute.route('/profileImage')
    .get(fetchImages)
imagesRoute.route('/profileImage/:id')
    .get(fetchImage)
    .put(updateImage)
    .delete(deleteImage)



module.exports = { imagesRoute, upload }