const custom = require("./src/custom");
const debug = require("./src/debug");
const error = require("./src/error");
const fatal = require("./src/fatal");
const info = require("./src/info");
const notice = require("./src/notice");
const trace = require("./src/trace");
const warn = require("./src/warn");

Module.exports = {
    custom,
    debug,
    error,
    fatal,
    info,
    notice,
    trace,
    warn
};