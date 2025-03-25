const notice = require("../src/notice");

describe("Notice Log Function", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test("should log a notice message", () => {
        notice("Notice test message");
    
        expect(console.log).toHaveBeenCalledWith(
            expect.stringMatching(/^\[NOTICE\].*Notice test message$/) // Match the full message in one string
        );
    });
    
});
