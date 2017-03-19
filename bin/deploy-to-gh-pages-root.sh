#! /bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

REPO_URL="git@github.com:ParticleHack/particlehack.github.io.git"
REPO_NAME="particlehack.github.io"
COMMIT=`git log -1 --oneline`

git clone $REPO_URL
rsync -a dist/* $REPO_NAME

cd $REPO_NAME
git add --all
git commit --allow-empty -am "$COMMIT"
git push origin master

