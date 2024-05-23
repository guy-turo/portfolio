const pdfRoute = require('express').Router()
const { authenticateToken } = require('../middlewares/authMiddleware')

const {
    downloadPdf,
    pdfUpload,
    fetchSinglePdf,
    fetchPdf,
    updatePdf,
    deletePdf,
} = require('../controllers/pdfController')

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


pdfRoute.post('/upload', authenticateToken, upload.single("file"), pdfUpload)
pdfRoute.post("/:urlPdf/download-pdf", downloadPdf)
pdfRoute.route('/').get(fetchPdf)
pdfRoute.put('/:id', authenticateToken, upload.single('file'), updatePdf)
pdfRoute.route('/:id').get(fetchSinglePdf)
pdfRoute.delete("/:id", authenticateToken, deletePdf)


module.exports = { pdfRoute, upload }