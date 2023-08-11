FROM node:18

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7000

CMD ["npm", "run", "dev"]