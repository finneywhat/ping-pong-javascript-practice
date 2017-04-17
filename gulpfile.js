var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream'); //use require function in order to load the gulp package into a gulp variable that can be used in our code

//when using require, it's standard practice to have the variable name (e.g. gulp) be the same as the package name, though technically the variable name could be anything

//more dependencies will be added here

gulp.task('myTask', function(){
  console.log('sup, gulp');
});

gulp.task('jsBrowserify', function() {
  return browserify({entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
