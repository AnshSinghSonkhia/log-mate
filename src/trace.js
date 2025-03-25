const logMessage = require("../utils/logMessage");

function trace(message, ...args) {
    logMessage("TRACE", message, ...args);
}

module.exports = trace;
