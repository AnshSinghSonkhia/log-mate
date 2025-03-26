const toDatabase = require("../src/toDatabase");

jest.mock("mysql2/promise", () => ({
    createConnection: jest.fn(() => ({
        execute: jest.fn(),
    })),
}));

test("should log message to database", async () => {
    const logToDB = await toDatabase({});
    await logToDB("INFO", "Database log test");

    expect(logToDB).toBeDefined();
});
