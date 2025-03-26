function maskSensitive(keys, logData) {
    const maskedData = { ...logData };

    keys.forEach(key => {
        if (maskedData[key]) {
            maskedData[key] = "****";
        }
    });

    return maskedData;
}

module.exports = maskSensitive;
