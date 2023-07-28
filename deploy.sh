#!/bin/bash
REPOSITORY=/var/www/html/shinyongjun-nextjs # 배포된 프로젝트 경로.

cd $REPOSITORY

sudo yarn install
sudo yarn build
sudo yarn start