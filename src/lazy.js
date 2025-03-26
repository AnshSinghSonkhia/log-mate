function lazy(logFunc) {
    return (level, messageFunc) => {
        if (typeof messageFunc === "function") logFunc(level, messageFunc());
    };
}

module.exports = lazy;
