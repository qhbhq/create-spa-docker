# build stage
FROM <%= imageRegistry ? imageRegistry + '/' : '' %><%= imageName %>-base:latest as build-stage
WORKDIR /app
COPY . .
RUN yarn build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY docker/beta/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
