const logMessage = require("../utils/logMessage");

const warn = (message, ...args) => logMessage("WARN", message, ...args);

module.exports = warn;
