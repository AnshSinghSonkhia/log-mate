const { toConsole, logToConsole } = require("../src/toConsole");

beforeEach(() => {
    console.log = jest.fn();
});

test("should disable console logging", () => {
    toConsole(false);
    logToConsole("INFO", "This should not log");
    expect(console.log).not.toHaveBeenCalled();
});

test("should enable console logging", () => {
    toConsole(true);
    logToConsole("INFO", "Console logging enabled");
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/INFO.*Console logging enabled/));
});
