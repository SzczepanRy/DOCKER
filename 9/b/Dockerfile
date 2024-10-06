FROM node:bullseye AS base

RUN apt update &&\
npm install -g serve &&\
mkdir code

WORKDIR /code

EXPOSE 5000

FROM base AS code

COPY ./server.js .

FROM code AS test

ENV CI=true

RUN npm run test

FROM code AS build

RUN npm init -y && npm run start

FROM base AS finish

COPY --from=build /code/build /code
CMD serve -s -l 5000
