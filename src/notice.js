const logMessage = require("../utils/logMessage");

const notice = (message, ...args) => logMessage("NOTICE", message, ...args);

module.exports = notice;
