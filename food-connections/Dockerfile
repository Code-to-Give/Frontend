# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]