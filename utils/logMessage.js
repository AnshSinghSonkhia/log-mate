function logMessage(level, message, ...args) {
    const formattedMessage = `[${level}] ${new Date().toISOString()} - ${message}`;
    console.log(formattedMessage, ...args);
}

module.exports = logMessage;
