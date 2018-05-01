FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN sudo npm install

EXPOSE 3005

CMD [ "npm", "start" ]
