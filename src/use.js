const plugins = [];

function use(plugin) {
    plugins.push(plugin);
}

function logWithPlugins(level, message) {
    plugins.forEach(plugin => plugin(level, message));
}

module.exports = use;
module.exports = logWithPlugins;
