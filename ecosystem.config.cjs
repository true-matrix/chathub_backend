module.exports = {
  apps: [
    {
      name: 'messenger-api',
      script: 'src/index.js',
      watch: '.',
      env: {
        NODE_ENV: 'production',
        port: '3001',
        DATABASE: 'mongodb+srv://rajeshtruematrix:uEFXSzX69p7ZA3x9@cluster0.g4vcjek.mongodb.net',
      },
    },
  ],

  deploy: {
    production: {
      user: 'cooktim',
      host: '68.178.173.95',
      ref  : 'origin/master',
      repo : 'git@github.com:true-matrix/chathub_backend.git',
      path: 'C:/Users/cooktim/New-folder/chathub_backend',
      'post-deploy': 'pm2 startOrRestart ecosystem.config.cjs --env production',
    },
  },
};
