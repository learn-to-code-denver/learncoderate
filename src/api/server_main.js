// API Server Stub

var restify = require('restify'),

//edit to use a command line flag instead
var apiPort = process.env.LCR_API_PORT || 8080;

//commented out support for https
var apiServer = restify.createServer({
 // certificate: fs.readFileSync('path/to/server/certificate'),
 // key: fs.readFileSync('path/to/server/key'),
  name: 'LearnCodeRate Server',
});



apiServer.listen(apiPort);
