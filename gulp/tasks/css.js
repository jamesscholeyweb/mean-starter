// CSS Task
// ========

var postcss = require('gulp-postcss'),
    cssnext = require('cssnext'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    handleErrors = require('../utils/handleErrors'),
    config = require('../config.tasks').css;

gulp.task('css', function() {
  var processors = [
    cssnext(config.cssnext)
  ];

  return gulp.src(config.src)
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(rename(config.outputName))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
