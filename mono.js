const { spawn } = require('node:child_process');
const fs = require('node:fs');

(() => {
    const command = process.argv[2] || 'run';
    const script = process.argv[3] || '';
    
    const pluginDir = './plugins'
    const plugins = fs.readdirSync(pluginDir);
    
    for (let plugin of plugins) {

        const proc = spawn(
            `npm`,
            [
                `${command}`,
                `${script}`,
                `--prefix=${pluginDir}/${plugin}`
            ]
        );

        proc.stderr.on('data', (data) => {
            process.stderr.write(data);
        });

        proc.stdout.on('data', (data) => {
            process.stdout.write(data);
        })

    }
})();