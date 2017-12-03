var gulp = require('gulp');

// Styles, minifying css, concat multiple files into one, autoprefixing
gulp.task('styles', function(){
    console.log('starting styles task');
});

// Scripts, minifying js files, concat multiple files into one, compiling exp.: typescript to es6
gulp.task('scripts', function(){
    console.log('starting default task');
});

// Images, compressing images
gulp.task('images', function(){
    console.log('starting default task');
});

// Default
gulp.task('default', function(){
    console.log('starting default task');
});