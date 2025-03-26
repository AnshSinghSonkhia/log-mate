const { setContext, logWithContext } = require("../src/setContext");

test("should set and log with context", () => {
    setContext({ user: "Alice" });
    logWithContext("INFO", "Login successful");
});
