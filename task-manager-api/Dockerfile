# the base image
FROM node:15

# setting up working directory as /app.
WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]