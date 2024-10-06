#multistaging

FROM nginx AS tmp

FROM debian AS dest

WORKDIR /app

COPY --from=tmp /usr/share/nginx/html/index.html /app

ENTRYPOINT ["cat" , "/app/index.html"]


