FROM node:18-slim as build

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn run build

# Production
FROM nginx:1.17-alpine
EXPOSE 8083
RUN rm -rf /etc/nginx/conf.d/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]