const fs = require("fs");
const toFile = require("../src/toFile");

jest.mock("fs");

test("should log message to file", () => {
    const logToFile = toFile("test.log");
    logToFile("INFO", "File log test");
    
    expect(fs.appendFileSync).toHaveBeenCalledWith("test.log", expect.stringContaining("File log test"), {});
});
