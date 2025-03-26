const { enableStreaming } = require("../src/enableStreaming");

test("should enable WebSocket streaming", () => {
    expect(() => enableStreaming(8081)).not.toThrow();
});
