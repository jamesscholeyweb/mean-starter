// Watch Task
// ==========

var gulp = require('gulp'),
    config = require('../config.tasks').watch,
    depends = require('../config.dependencies').watch;

gulp.task('watch', depends, function() {
  gulp.watch(config.markup, ['markup']);
  gulp.watch(config.css, ['css']);
});
