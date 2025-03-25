const error = require("../src/error");

describe("Error Log Function", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test("should log an error message", () => {
        error("Error test message");

        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[ERROR\] \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z - Error test message$/)
        );
    });
});
