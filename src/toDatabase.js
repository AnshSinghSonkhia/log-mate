const mysql = require("mysql2/promise");

async function toDatabase(dbConfig) {
    const connection = await mysql.createConnection(dbConfig);
    return async (level, message, ...args) => {
        await connection.execute(
            "INSERT INTO logs (level, message, timestamp) VALUES (?, ?, ?)",
            [level, `${message} ${args.join(" ")}`, new Date().toISOString()]
        );
    };
}

module.exports = toDatabase;
