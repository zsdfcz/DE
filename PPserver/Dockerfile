FROM node:12-alpine

ENV DOCKERIZE_VERSION v0.2.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /app
COPY package*.json /app
RUN npm install

COPY . /app
RUN apt-get update && apt-get install -y locales
RUN locale-gen ko_KR.UTF-8
ENV LC_ALL ko_KR.UTF-8

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh

CMD [ "npm", "start" ]
EXPOSE 3000

#docker build -t ppserver .