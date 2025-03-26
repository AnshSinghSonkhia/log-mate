const { setBatchSize, logBatch, flush } = require("../src/setBatchSize");

test("should set batch size", () => {
    setBatchSize(5);
});

test("should batch logs and flush", () => {
    const mockLog = jest.fn();
    logBatch(mockLog, "Test log 1");
    logBatch(mockLog, "Test log 2");
    flush(mockLog);
    expect(mockLog).toHaveBeenCalledTimes(2);
});
