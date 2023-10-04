FROM node:18.14.2-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run db:generate

EXPOSE 8000

RUN npm run build:dev

WORKDIR /usr/app/dist

CMD ["node", "./server.js"]


