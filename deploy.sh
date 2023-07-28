#!/bin/bash
REPOSITORY=/var/www/html/shinyongjun-nextjs # 배포된 프로젝트 경로.

cd $REPOSITORY

yarn install
yarn build
yarn start