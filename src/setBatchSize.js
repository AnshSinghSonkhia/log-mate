let batchSize = 10;
let logBuffer = [];

function setBatchSize(size) {
    if (size > 0) batchSize = size;
}

function logBatch(logFunc, message) {
    logBuffer.push(message);
    if (logBuffer.length >= batchSize) flush(logFunc);
}

function flush(logFunc) {
    logBuffer.forEach(msg => logFunc(msg));
    logBuffer = [];
}

module.exports = {
    setBatchSize,
    logBatch,
    flush
};
