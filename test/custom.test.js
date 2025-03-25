const custom = require("../src/custom");

describe("Custom Log Function", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test("should log a custom level message", () => {
        custom("custom_level", "Custom level test message");
    
        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[CUSTOM_LEVEL\].*Custom level test message$/)
        );
    });    
});
