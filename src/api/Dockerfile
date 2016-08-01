FROM node:argon

RUN mkdir -p /srv/node/learncoderate/api
WORKDIR /srv/node/learncoderate/api

# RUN npm i gulp

COPY . /srv/node/learncoderate/api

CMD [ "node", "server.js" ]
EXPOSE 3000 
