const { program } = require("commander");
const fs = require("fs");

function cli() {
    program
        .command("view <file>")
        .description("View log file")
        .action(file => {
            if (fs.existsSync(file)) {
                console.log(fs.readFileSync(file, "utf8"));
            } else {
                console.error("File not found");
            }
        });

    program
        .command("clear <file>")
        .description("Clear log file")
        .action(file => {
            fs.writeFileSync(file, "");
            console.log("Log file cleared");
        });

    program.parse(process.argv);
}

module.exports = cli;
