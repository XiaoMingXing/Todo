FROM node:carbon
WORKDIR /usr/todo/todo-express
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]




