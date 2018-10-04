FROM node:8 AS build-env

WORKDIR /source

# Copy and build everything else
COPY . ./

# Set CI so that jest will run all tests in non-interactive mode
ENV CI=true

RUN ./set-env.sh
RUN yarn install
RUN yarn test
RUN yarn lint
RUN export NODE_OPTIONS=--max_old_space_size=8192 && yarn build-lib

#RUN yarn deploy-storybook
