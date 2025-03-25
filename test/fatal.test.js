const fatal = require("../src/fatal");

describe("Fatal Log Function", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test("should log a fatal error message", () => {
        fatal("Fatal error test message");

        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[FATAL\] \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z - Fatal error test message$/)
        );
    });
});
