# https://hub.docker.com/_/node
FROM node:15.4.0-alpine3.10

ENV NODE_VERSION 15.4.0

EXPOSE 3000

RUN apk add --update tini

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && cache clean

COPY . . 

CMD ["tini", "--", "node", "./bin/www"]
