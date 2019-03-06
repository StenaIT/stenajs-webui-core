FROM node:11.10.0-alpine AS build-env

WORKDIR /source

# Copy package.json and lockfile to use docker cache more efficiently
COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

# Copy and build everything else
COPY . ./

# Set CI so that jest will run all tests in non-interactive mode
ENV CI=true

RUN yarn install
RUN yarn test
RUN yarn lint
RUN yarn build-lib

#RUN yarn deploy-storybook
