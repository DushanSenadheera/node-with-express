FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY key.pem /etc/ssl/
COPY cert.pem /etc/ssl/

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
