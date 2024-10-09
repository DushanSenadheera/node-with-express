FROM ubuntu

WORKDIR /var/www/html/server/

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nodejs -y 
RUN apt-get install npm -y

COPY ./ /var/www/html/server/

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
git check