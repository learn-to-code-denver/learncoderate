const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('./config.json');
const chalk = require('chalk');

//this could potentially read package.json for version and
//other basic config information
var project = {
    name : "learncoderate - api",
    version : 1.0,
    description : "Simple web app for students to use at Learn to Code @ the Denver Public Library"	
};


gulp.task('default', () => {
   console.log("Beginning Default Task");

});


gulp.task('info', () => {
	// require and use util.inspect to get pretty printing
    console.log(chalk.blue(JSON.stringify(project)));
   
});


gulp.task('build', ()=> {
     console.log(`Building: ${project.name}`);
});


gulp.task('lint', () => {
    
});
