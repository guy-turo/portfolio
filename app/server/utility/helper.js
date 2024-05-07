const multer = require('multer');
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const crypto = require('crypto');
require('dotenv').config({ path: ".env.development.local" })
const jwt = require("jsonwebtoken")
const generateFileId = () => {
    return crypto.randomBytes(16).toString('hex')
}



require('dotenv').config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
const fileId = generateFileId().toString;
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        resource_type: 'auto',
        folder: "files",
        allowFormats: ['jpeg', 'png', 'jpg', "pdf"],
        // public_id: () => {
        //     return fileId
        // },
        // metadata: { fileId }
    }
})

const upload = multer({ storage })

const getCloudinaryImagePath = async(url) => {
    const urlParts = url.split('/');

    if (urlParts.length < 7 || urlParts[0] !== 'https:' || urlParts[2] !== 'res.cloudinary.com') {
        throw new Error('Invalid Cloudinary URL format');
    }
    const urlImage = urlParts.slice(8).join('/')
    return urlImage.slice(0, -4)
}
const generateDownloadLink = async(publicId) => {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils(
        `public_id=${publicId}&timestamp=${timestamp}`,
        process.env.CLOUDINARY_API_SECRET,
    );
    const url = `https://res.cloudinary.com/your-cloud-name/image/upload/fl_attachment/v${timestamp},so${signature}/${publicId}`;
    return url;
};

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
}

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "45s" })
}

function isValidPassword(password) {
    if (!password || typeof password !== 'string') {
        return false;
    }
    const minLength = 8;
    if (password.length < minLength) {
        return false;
    }
    const regex = /(?=.*\d)(?=.*[^a-zA-Z\d])/g;
    const hasNumberAndSymbol = regex.test(password);
    return hasNumberAndSymbol;
}

module.exports = { isValidEmail, isValidPassword, upload, generateAccessToken, getCloudinaryImagePath, generateDownloadLink }