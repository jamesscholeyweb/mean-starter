// Watchify Task
// =============

var createBundles = require('../functions/function.bundleWatch'),
    gulp = require('gulp'),
    config = require('../config.tasks').watchify;

gulp.task('watchify', function() {
  return createBundles(config.files);
});
