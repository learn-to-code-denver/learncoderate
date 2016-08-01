var gulp = require('gulp');
var config = require('./config.json');
var chalk = require('chalk');

//this could potentially read package.json for version and
//other basic config information
var project = {
    name : "learncoderate - api",
    version : 1.0,
    description : "Simple web app for students to use at Learn to Code @ the Denver Public Library"	
};


gulp.task('default', function() {
   console.log("Beginning Default Task");

});


gulp.task('info', function() {
	// require and use util.inspect to get pretty printing
    console.log(chalk.blue(JSON.stringify(project)));
   
});


gulp.task('build',function() {
     console.log(`Building: ${project.name}`);
});
