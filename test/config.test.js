const { setConfig, getConfig } = require("../src/config");

console.log("🔹 Initial Config:", getConfig());

// Test updating the config
setConfig({
  level: "debug",
  format: "json",
  transports: [{ type: "console" }, { type: "file", path: "logs/test.log" }],
  maskSensitive: ["password"],
  encrypt: true,
});

// Verify updated config
console.log("✅ Updated Config:", getConfig());

// Ensure previous values persist if not overwritten
setConfig({ level: "error" });
console.log("🔹 Final Config (Level should be 'error'):", getConfig());
