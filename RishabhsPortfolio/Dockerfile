# Fetch node image
# FROM node:18.13.0-alpine
FROM node:hydrogen-alpine3.20 AS angular-built
# Set the working directory inside the container
WORKDIR /RishabhsPortfolio

# Copy package.json and package-lock.json to the container
COPY package*.json ./

#Install latest NPM
RUN npm install -g npm@10.8.1


# Install angular
RUN npm i -g @angular/core@18 @angular/cli@18

# Install dependencies
RUN npm install --legacy-peer-deps

# Build the Angular application
COPY . .
RUN npm run build RishabhsPortfolio

# Serve the built app using NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=ra_port /app/dist/RishabhsPortfolio /app/dist/angular-nginx-docker 
# COPY --from=0 /app/dist/RishabhsPortfolio /usr/share/nginx/html
EXPOSE 80
