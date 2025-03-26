let format = "text";

function setFormat(type) {
    if (["json", "yaml", "text"].includes(type)) {
        format = type;
    }
}

function formatLog(level, message, ...args) {
    const logObject = { level, message, args, timestamp: new Date().toISOString() };
    
    if (format === "json") {
        return JSON.stringify(logObject);
    } else if (format === "yaml") {
        return `level: ${level}\nmessage: ${message}\nargs: ${JSON.stringify(args)}\ntimestamp: ${logObject.timestamp}`;
    }
    
    return `[${level}] ${logObject.timestamp} - ${message} ${args.join(" ")}`;
}

// module.exports = setFormat;
// module.exports = formatLog;

module.exports = { setFormat, formatLog };