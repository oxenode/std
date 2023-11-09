const { execSync } = require('node:child_process');
const fs = require('node:fs');
console.log(process.argv)
const command = process.argv[2] || 'run';
const script = process.argv[3] || '';
const pluginDir = './plugins'
const plugins = fs.readdirSync(pluginDir);

for (let plugin of plugins) {
    execSync(
        `npm ${command} ${script} --prefix=${pluginDir}/${plugin}`,
        { stdio: [0, 1, 2] }
    );
}