# use current LTS version of node
FROM node:argon

RUN mkdir -p /srv/http/learncoderate/webclient
WORKDIR /srv/http/learncoderate/webclient

COPY . /srv/http/learncoderate/webclient

CMD [ "node", "server.js" ]
# this should be set based on the config
EXPOSE 3000
