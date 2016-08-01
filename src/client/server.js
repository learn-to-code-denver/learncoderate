var express = require('express');
var app = express();

const serverConfig = {
    defaultPort : "3000",
    rootDir : "/"
};


app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || serverConfig.defaultPort);