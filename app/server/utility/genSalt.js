const crypto = require('crypto');

function generateSecretKey(length) {
    // Recommended length for AES-256 is 32 bytes (256 bits)
    const buffer = crypto.randomBytes(length);
    return buffer.toString('hex'); // Convert to hexadecimal string
}

const secretKey = generateSecretKey(32);
console.log(secretKey);