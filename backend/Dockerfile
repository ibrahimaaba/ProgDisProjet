FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install mysql2
RUN npm install express
COPY . .
CMD ["node", "src/App.js"]
EXPOSE 5000