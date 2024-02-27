const { spawn } = require('node:child_process');
const fs = require('node:fs');

const PACKAGE_MANAGER = 'npm';
const PROC_COUNT = 4;

/**
 * Spawn `PROC_COUNT` processes with the `--prefix=` command for all modules
 */
(async () => {
    const command = process.argv[2] || 'run';
    const script = process.argv[3] || '';

    const pluginDir = './plugins'
    const plugins = fs.readdirSync(pluginDir);
    let procs = [];
    while (plugins.length > 0) {
        for (let i = 0; (i < PROC_COUNT) && plugins[i]; i++) {
            const args = [
                `${command}`,
                `${script}`,
                `--prefix=${pluginDir}/${plugins[i]}`
            ]
            procs.push({
                command: [PACKAGE_MANAGER, ...args].join(' '),
                proc: new Promise((resolve, reject) => {
                    const proc = spawn(PACKAGE_MANAGER, args);
            
                    proc.stderr.on('data', (data) => {
                        reject(data);
                    });
            
                    proc.stdout.on('data', (data) => {
                        process.stdout.write(data);
                    });
            
                    //proc.on('close', (data) => resolve(data));
                    proc.on('exit', (data) => resolve(data))
                })
            });
        }
        process.stdout.write('\x1b[32m\n');
        procs.forEach(proc => {
            process.stdout.write(proc.command + '\n');
        })
        process.stdout.write('\x1b[0m\n');

        await Promise.all(procs.map(p => p.proc)).catch(e => {
            process.stderr.write(e);
        });

        procs = [];
        for (let i = 0; i < PROC_COUNT; i++) 
            plugins.shift();
    }
})();