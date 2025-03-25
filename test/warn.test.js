const warn = require("../src/warn");

describe("Warn Log Function", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test("should log a warning message", () => {
        warn("Warning test message");
    
        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[WARN\].*Warning test message$/) // Match the full log message as one string
        );
    });      
});
