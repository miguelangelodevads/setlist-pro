FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY sw.js /usr/share/nginx/html/sw.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
