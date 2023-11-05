const { execSync } = require('node:child_process');
const fs = require('node:fs');

const command = process.argv[2] || build;
const pluginDir = './plugins'
const plugins = fs.readdirSync(pluginDir);

for (let plugin of plugins) {
    execSync(
        `npm run ${command} --prefix=${pluginDir}/${plugin}`,
        { stdio: [0, 1, 2] }
    );
}