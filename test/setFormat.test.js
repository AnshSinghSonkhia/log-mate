const { setFormat, formatLog } = require("../src/setFormat");

test("should set log format to JSON", () => {
    setFormat("json");
    const log = formatLog("INFO", "JSON log test");
    expect(() => JSON.parse(log)).not.toThrow();
});

test("should set log format to YAML", () => {
    setFormat("yaml");
    const log = formatLog("INFO", "YAML log test");
    expect(log).toContain("level: INFO");
});
