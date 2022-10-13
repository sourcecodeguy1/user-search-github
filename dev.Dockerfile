FROM node:18-slim

WORKDIR /app

COPY package.json /app

RUN yarn install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]