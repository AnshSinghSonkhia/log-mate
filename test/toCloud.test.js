const { toCloud, logToCloud } = require("../src/toCloud");
const axios = require("axios");

jest.mock("axios");

beforeEach(() => {
    jest.clearAllMocks();
});

test("should send log to cloud", async () => {
    toCloud("https://cloud.logging.service");
    await logToCloud("INFO", "Cloud log test");

    expect(axios.post).toHaveBeenCalledWith(
        "https://cloud.logging.service",
        expect.objectContaining({
            level: "INFO",
            message: "Cloud log test",
            timestamp: expect.any(String)
        })
    );
});
