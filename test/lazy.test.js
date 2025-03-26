const lazy = require("../src/lazy");

test("should lazy evaluate messages", () => {
    const logMock = jest.fn();
    const lazyLog = lazy(logMock);
    lazyLog("INFO", () => "Lazy message");
    expect(logMock).toHaveBeenCalledWith("INFO", "Lazy message");
});
