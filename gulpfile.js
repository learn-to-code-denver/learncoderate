var gulp = require('gulp');

var projectname = "learntocoderate";
var version = "1.0.0-alpha";

var summary = () => `Learn to Code at the Denver Library - ${projectname} ${version}`;



gulp.task('default', function() {
    console.log(summary());
});


gulp.task('build api', function() {
    console.log('building learntocoderate api');
});

