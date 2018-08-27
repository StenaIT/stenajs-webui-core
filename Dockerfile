FROM node:8 AS build-env

WORKDIR /source

# Copy and build everything else
COPY . ./

# Set CI so that jest will run all tests in non-interactive mode
ENV CI=true

RUN yarn install
RUN yarn test
RUN yarn lint
RUN yarn build

#RUN yarn deploy-storybook
