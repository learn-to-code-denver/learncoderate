FROM node:argon

RUN mkdir -p /srv/http/learncoderate/webclient
WORKDIR /srv/http/learncoderate/webclient

COPY . /srv/http/learncoderate/webclient

CMD [ "node", "server.js" ]
EXPOSE 80 
