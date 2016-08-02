const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('./config.json');
const chalk = require('chalk');

//this could potentially read package.json for version and
//other basic config information
var project = {
    name : "learncoderate - web client",
    version : 1.0,
    description : "Simple web app for students to use at Learn to Code @ the Denver Public Library"	
};


gulp.task('default',() => {
   console.log("Beginning Default Task");
});


gulp.task('info', () =>  {
    console.log(JSON.stringify(project));
   
});

gulp.task('bundle-assets', () => {
    console.log("Bundling Assets");
});


gulp.task('build', () => {
     console.log(`Building: ${project.name}`);
});


gulp.task('lint',() => {

});
