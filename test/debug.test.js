const debug = require("../src/debug");

describe("debug log function", () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    it("should log a debug message", () => {
        debug("Debug test message");

        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[DEBUG\] \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z - Debug test message$/)
        );
        
    });
});
