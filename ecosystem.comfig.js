module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'npm',
        args: 'run start',
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
          BASE_URL: 'http://localhost:3000',
        },
      },
    ],
  };
  