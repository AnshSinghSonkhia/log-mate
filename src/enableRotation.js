const fs = require("fs");

function enableRotation(options) {
    global.logRotationConfig = options;
}

function rotateLogs() {
    if (!global.logRotationConfig) return;

    const { maxSize = 500, maxFiles = 3 } = global.logRotationConfig;
    const logPath = "logs/app.log";

    if (fs.existsSync(logPath) && fs.statSync(logPath).size > maxSize) {
        for (let i = maxFiles - 1; i > 0; i--) {
            if (fs.existsSync(`logs/app.log.${i}`)) {
                fs.renameSync(`logs/app.log.${i}`, `logs/app.log.${i + 1}`);
            }
        }
        fs.renameSync(logPath, "logs/app.log.1");
        fs.writeFileSync(logPath, ""); // Clear the log
    }
}

module.exports = { enableRotation, rotateLogs };
