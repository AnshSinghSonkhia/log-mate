let context = {};

function setContext(newContext) {
    context = { ...context, ...newContext };
}

function logWithContext(level, message) {
    console.log(`[${level.toUpperCase()}] ${JSON.stringify(context)} - ${message}`);
}

module.exports = {
    setContext,
    logWithContext
};
