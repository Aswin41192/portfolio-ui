FROM nginx
COPY /dist/portfolio-ui/ /usr/share/nginx/html
EXPOSE 80
