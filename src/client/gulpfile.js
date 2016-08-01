var gulp = require('gulp');
var config = require('./config.json');
var chalk = require('chalk');

//this could potentially read package.json for version and
//other basic config information
var project = {
    name : "learncoderate - web client",
    version : 1.0,
    description : "Simple web app for students to use at Learn to Code @ the Denver Public Library"	
};


gulp.task('default', function() {
   console.log("Beginning Default Task");
});


gulp.task('info', function() {
    console.log(JSON.stringify(project));
   
});

gulp.task('bundle-assets', function() {
    console.log("Bundling Assets");
});


gulp.task('build',function() {
     console.log(`Building: ${project.name}`);
});
