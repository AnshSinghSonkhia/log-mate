const WebSocket = require("ws");

let wss;
function enableStreaming(port = 8080) {
    wss = new WebSocket.Server({ port });
}

function streamLog(level, message) {
    if (wss) {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ level, message }));
            }
        });
    }
}

module.exports = {
    enableStreaming,
    streamLog
};
