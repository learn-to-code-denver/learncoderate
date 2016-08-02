const express = require('express');
const compressor = require('compression');
const app = express();
const cmdline = require('commander');


cmdline.arguments('<file>')
              .option('-P, --port <port>','The port the server listens on.')
              .option('-d. --basedir <basedir>','The base directory for the server')
              .action((file) => {
                  console.log("commander - do app");
              })
              .parse(process.argv);

const serverConfig = {
    defaultPort : "8080",
    rootDir : "/"
};


/* 
 * TODO -  Add logic to adjust compression based on 
 *    request type and 
*/
//enable gzip compression of assets
app.use(compressor());

app.use(express.static(__dirname + serverConfig.rootDir));


<<<<<<< HEAD
=======
// Configuration priority
//   config file 
//   Environment Variable
//   Command line parameters
>>>>>>> 8b39475dd7b721d2ed78e42d37693eeaef9da1a7
app.listen(process.env.PORT || serverConfig.defaultPort);
