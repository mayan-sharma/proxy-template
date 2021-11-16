# base image
FROM node:14.17-alpine3.13

# create new group and system user
RUN addgroup app && adduser -S -G app app
# create and change owner of /app directory
RUN mkdir app && chown app:app app
# shift to user
USER app

WORKDIR app/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000

# run apsp
CMD ["npm", "run", "start"]