FROM ubuntu

WORKDIR /app

#COPY ./env/ .

#RUN . ./init.sh && echo $VER > log ;echo $TYPE >> log && rm -rf /app/init.sh


RUN --mount=type=bind,source=/env,target=/cenv \
. /cenv/init.sh && echo $VER $TYPE > log
