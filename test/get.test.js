const get = require("../src/get");

test("should get namespaced logger", () => {
    const logger = get("auth");
    expect(logger).toBeDefined();
});
