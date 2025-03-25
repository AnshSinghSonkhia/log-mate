const trace = require("../src/trace");

describe("trace log function", () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    it("should log a trace message", () => {
        trace("Trace test message");

        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[TRACE\] \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z - Trace test message$/)
        );
        
    });
});
