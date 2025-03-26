const fs = require("fs");

function toFile(filepath, options = {}) {
    return (level, message, ...args) => {
        const logEntry = `[${level}] ${new Date().toISOString()} - ${message} ${args.join(" ")}\n`;
        fs.appendFileSync(filepath, logEntry, options);
    };
}

module.exports = toFile;
