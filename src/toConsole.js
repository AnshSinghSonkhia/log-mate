let consoleEnabled = true;

function toConsole(enable = true) {
    consoleEnabled = enable;
}

function logToConsole(level, message, ...args) {
    if (consoleEnabled) {
        console.log(`[${level}] ${new Date().toISOString()} - ${message}`, ...args);
    }
}

module.exports = { toConsole, logToConsole };
