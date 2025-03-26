const logMessage = require("../utils/logMessage");

// const custom = (level, message, ...args) => logMessage(level.toUpperCase(), message, ...args);
const custom = (level, message = "No message provided", ...args) =>
    logMessage(level.toUpperCase(), message, ...args);

module.exports = custom;
