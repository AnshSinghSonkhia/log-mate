const logMessage = require("../utils/logMessage");

function info(message, ...args) {
    logMessage("INFO", message, ...args);
}

module.exports = info;
