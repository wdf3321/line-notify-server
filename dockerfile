FROM node:18-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm i
EXPOSE 3000
CMD ["node", "index.js"]