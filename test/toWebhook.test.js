const axios = require("axios");
const toWebhook = require("../src/toWebhook");

jest.mock("axios");

test("should send log to webhook", async () => {
    const logToWebhook = toWebhook("https://webhook.site");

    await logToWebhook("INFO", "Webhook log test");

    expect(axios.post).toHaveBeenCalledWith(
        "https://webhook.site",
        expect.objectContaining({ level: "INFO", message: "Webhook log test" }),
        {}
    );
});
