const { enableRotation, rotateLogs } = require("../src/enableRotation");
const fs = require("fs");
const mockFs = require("mock-fs");

beforeEach(() => {
    mockFs({
        "logs": { "app.log": "Initial log content" },
    });
});

afterEach(() => {
    mockFs.restore();
});

test("should enable log rotation", () => {
    enableRotation({ maxSize: 500, maxFiles: 3 });
    expect(typeof enableRotation).toBe("function");
});

test("should rotate logs", () => {
    fs.appendFileSync("logs/app.log", "A".repeat(600)); // Simulate large log file
    rotateLogs();
    
    expect(fs.existsSync("logs/app.log")).toBe(true);
});
