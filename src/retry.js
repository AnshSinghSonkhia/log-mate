const _ = require("lodash");

function retry(logFunc, attempts = 3, delay = 1000) {
    return async (level, message) => {
        const wrapped = _.attempt(() => logFunc(level, message));
        if (_.isError(wrapped)) {
            for (let i = 0; i < attempts; i++) {
                await new Promise(res => setTimeout(res, delay));
                if (!_.attempt(() => logFunc(level, message))) break;
            }
        }
    };
}

module.exports = retry;
