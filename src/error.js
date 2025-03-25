const logMessage = require("../utils/logMessage");

const error = (message, ...args) => logMessage("ERROR", message, ...args);

module.exports = error;
