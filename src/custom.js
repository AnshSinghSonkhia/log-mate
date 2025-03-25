const logMessage = require("../utils/logMessage");

const custom = (level, message, ...args) => logMessage(level.toUpperCase(), message, ...args);

module.exports = custom;
