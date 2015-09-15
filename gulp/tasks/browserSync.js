// BrowserSync Task
// ================

var browserSync = require('browser-sync'),
    gulp = require('gulp'),
    config = require('../config.tasks').browserSync,
    depends = require('../config.dependencies').browserSync;

gulp.task('browserSync', depends, function() {
  browserSync(config);
});
