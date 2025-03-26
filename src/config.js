let config = {
    level: "info",
    transports: [{ type: "console" }],
    format: "text",
    maskSensitive: [],
    encrypt: false,
  };
  
  const setConfig = (newConfig) => {
    config = { ...config, ...newConfig };
  };
  
  const getConfig = () => config;
  
  module.exports = { setConfig, getConfig };
  