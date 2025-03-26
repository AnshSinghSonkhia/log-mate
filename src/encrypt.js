const crypto = require("crypto");

function encrypt(key, logData) {
    const cipher = crypto.createCipher("aes-256-cbc", key);
    let encrypted = cipher.update(JSON.stringify(logData), "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

module.exports = encrypt;
