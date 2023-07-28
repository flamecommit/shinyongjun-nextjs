#!/bin/bash
REPOSITORY=/var/www/html/shinyongjun-nextjs # 배포된 프로젝트 경로.

cd $REPOSITORY

sudo /usr/bin/yarn install
sudo /usr/bin/yarn build
sudo /usr/bin/pm2 reload ecosystem.config.js --env=prod