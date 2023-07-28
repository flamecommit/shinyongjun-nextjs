module.exports = {
  apps: [
    {
      name: "shinyongjun.com",
      exec_mode: "cluster",
      script: "next start",
      env_prod: {
        HOST: "0.0.0.0",
        PORT: 3000,
        NODE_ENV: "prod",
        instances: "max",
      },
    },
  ],
};
