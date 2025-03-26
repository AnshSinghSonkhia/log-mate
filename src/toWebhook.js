const axios = require("axios");

function toWebhook(url, options = {}) {
    return async (level, message, ...args) => {
        const payload = { level, message, args, timestamp: new Date().toISOString() };

        try {
            await axios.post(url, payload, options);
        } catch (error) {
            console.error("Webhook logging failed:", error);
        }
    };
}

module.exports = toWebhook;
