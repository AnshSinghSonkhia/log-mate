const maskSensitive = require("../src/maskSensitive");

test("should mask sensitive data", () => {
    const log = { username: "user1", password: "secret" };
    const masked = maskSensitive(["password"], log);

    expect(masked.password).toBe("****");
});
