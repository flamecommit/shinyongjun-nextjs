module.exports = {
  apps: [
    {
      name: "shinyongjun.com",
      exec_mode: "cluster",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_prod: {
        HOST: "0.0.0.0",
        PORT: 3000,
        NODE_ENV: "prod",
        instances: "max",
      },
    },
  ],
};
