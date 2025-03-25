const logMessage = require("../utils/logMessage");

function debug(message, ...args) {
    logMessage("DEBUG", message, ...args);
}

module.exports = debug;
