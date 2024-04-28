const pdfRoute = require('express').Router()
const { isAuth } = require("./authMiddleware")

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


pdfRoute.post('/upload', isAuth, upload.single("file"), pdfUpload)
pdfRoute.get("/download-pdf/:urlPdf", downloadPdf)
pdfRoute.route('/', )
    .get(fetchPdf)
pdfRoute.put('/:id', isAuth, upload.single('file'), updatePdf)
pdfRoute.route('/:id').get(fetchSinglePdf)
pdfRoute.delete("/:id", isAuth, deletePdf)



module.exports = { pdfRoute, upload }