var gulp = require('gulp');

var project = {
    name : "learncoderate - api",
    version : 1.0,
    description : "Simple web app for students to use at Learn to Code @ the Denver Public Library"	
};


gulp.task('default', function() {
   console.log("Beginning Default Task");
});


gulp.task('info', function() {
    console.log(JSON.stringify(project));
   
});


gulp.task('build',function() {
     console.log(`Building: ${project.name}`);
});
