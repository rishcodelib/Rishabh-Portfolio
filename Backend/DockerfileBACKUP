# Using Node Image from Docker Hub
FROM node:16

#Create app directory
WORKDIR /the/workdir/path

#Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production
# FROM httpd:2.4

COPY . .
#Expose port
EXPOSE 8080

CMD [ "node", "server.js"]