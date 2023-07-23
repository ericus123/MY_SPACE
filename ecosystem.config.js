module.exports = {
    apps: [
        {
            name: 'my-space',
            script: 'yarn start',
            // instances: 'max',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
