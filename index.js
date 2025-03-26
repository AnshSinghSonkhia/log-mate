const cli = require("./src/cli");
const custom = require("./src/custom");
const debug = require("./src/debug");
const { enableRotation, rotateLogs } = require("./src/enableRotation");
const { enableStreaming, streamLog } = require("./src/enableStreaming");
const encrypt = require("./src/encrypt");
const error = require("./src/error");
const fatal = require("./src/fatal");
const get = require("./src/get");
const info = require("./src/info");
const lazy = require("./src/lazy");
const maskSensitive = require("./src/maskSensitive");
const notice = require("./src/notice");
const retry = require("./src/retry");
const { setBatchSize, logBatch, flush} = require("./src/setBatchSize");
const { setContext, logWithContext } = require("./src/setContext");
const { setFormat, formatLog } = require("./src/setFormat");
const { toCloud, logToCloud } = require("./src/toCloud");
const { toConsole, logToConsole } = require("./src/toConsole");
const toDatabase = require("./src/toDatabase");
const toFile = require("./src/toFile");
const toWebhook = require("./src/toWebhook");
const trace = require("./src/trace");
const use = require("./src/use");
const warn = require("./src/warn");
const { logWithPlugins } = require("./src/plugins");
const { setConfig, getConfig } = require("./config");

module.exports = {
    cli,
    custom,
    debug,
    enableRotation,
    rotateLogs,
    enableStreaming,
    streamLog,
    encrypt,
    error,
    fatal,
    get,
    info,
    lazy,
    maskSensitive,
    notice,
    retry,
    setBatchSize,
    logBatch,
    flush,
    setContext,
    logWithContext,
    setFormat,
    formatLog,
    toCloud,
    logToCloud,
    toConsole,
    logToConsole,
    toDatabase,
    toFile,
    toWebhook,
    trace,
    use,
    logWithPlugins,
    warn,
    setConfig,
    getConfig
};