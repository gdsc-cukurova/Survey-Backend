FROM node:12.22.5-alpine3.12

COPY . /usr/backend
WORKDIR /usr/backend

RUN npm i

RUN npm start
