FROM nginx

LABEL var="demo"

COPY ./index.html /usr/share/nginx/html/index.html

HEALTHCHECK CMD curl localhost 80 || exit 1

EXPOSE 80
#ENTRYPOINT ["nginx"]
#CMD ["-g", "daemon off;"]

