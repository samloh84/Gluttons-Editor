FROM node:5.0.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

VOLUME /usr/src/app/scratch

EXPOSE 3000

CMD npm start
