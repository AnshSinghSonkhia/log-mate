const axios = require("axios");

let cloudUrl = null;

function toCloud(service) {
    cloudUrl = service;
}

async function logToCloud(level, message) {
    if (!cloudUrl) throw new Error("Cloud logging service URL is not set");

    await axios.post(cloudUrl, {
        level,
        message,
        timestamp: new Date().toISOString()
    });
}

// module.exports = toCloud; // Ensure this is correct
// module.exports = logToCloud; // Ensure this is correct

module.exports = { toCloud, logToCloud };