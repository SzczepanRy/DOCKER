FROM debian:11

WORKDIR /app

COPY --chown=test:test . .

RUN apt update &&\
apt install git -y &&\
rm -rf /var/lib/apt/lists/* &&\
useradd -u 1000 -d /app test &&\
git init &&\
git add test1.sh


USER test
