#!/usr/bin/env sh

USERNAME=parallelgarden
HOST=github.com
DOMAIN=

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo $DOMAIN > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@$HOST:<USERNAME>/<USERNAME>.github.io.git master
git push -f git@$HOST:$USERNAME/$USERNAME.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@$HOST:<USERNAME>/<REPO>.git master:gh-pages

cd -
