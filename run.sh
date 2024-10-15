docker build -t node-img .
docker run -d -p 3000:3000 --name node-app node-img