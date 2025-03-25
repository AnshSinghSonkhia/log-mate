const info = require("../src/info");

describe("info log function", () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    it("should log an info message", () => {
        info("Info test message");

        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[INFO\] \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z - Info test message$/)
        );
         
    });
});
