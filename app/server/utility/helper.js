const multer = require('multer');
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// function generateFileId() {
//     return uuidv4();
// }



require('dotenv').config()
cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
    // const fileId = generateFileId();
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        resource_type: 'auto',
        folder: "Images",
        allowFormats: ['jpeg', 'png', 'jpg', "pdf"],

    }
})

const upload = multer({ storage })

const getCloudinaryImagePath = async(url) => {
    const urlParts = url.split('/');

    if (urlParts.length < 7 || urlParts[0] !== 'https:' || urlParts[2] !== 'res.cloudinary.com') {
        throw new Error('Invalid Cloudinary URL format');
    }
    const urlImage = urlParts.slice(7).join('/')
    return urlImage.slice(0, -4)
}
const generateDownloadLink = async(publicId) => {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.hmac_sha256(
        `public_id=${publicId}&timestamp=${timestamp}`,
        process.env.CLOUDINARY_API_SECRET,
    );
    const url = `https://res.cloudinary.com/your-cloud-name/image/upload/fl_attachment/v${timestamp},so${signature}/${publicId}`;
    return url;
};

module.exports = { upload, getCloudinaryImagePath, generateDownloadLink }