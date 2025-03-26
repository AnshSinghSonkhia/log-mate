const encrypt = require("../src/encrypt");

test("should encrypt log data", () => {
    const key = "secret-key";
    const log = { level: "INFO", message: "Encrypt test" };

    const encrypted = encrypt(key, log);

    expect(typeof encrypted).toBe("string");
});
