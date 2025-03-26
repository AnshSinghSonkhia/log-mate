const loggers = new Map();

function get(namespace) {
    if (!loggers.has(namespace)) {
        loggers.set(namespace, (level, message) =>
            console.log(`[${namespace}] [${level.toUpperCase()}] ${message}`)
        );
    }
    return loggers.get(namespace);
}

module.exports = get;
