const logMessage = require("../utils/logMessage");

const fatal = (message, ...args) => logMessage("FATAL", message, ...args);

module.exports = fatal;
