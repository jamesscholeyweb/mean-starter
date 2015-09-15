// Nodemon task
// ============

var nodemon = require('gulp-nodemon'),
    gulp    = require('gulp'),
    config = require('../config.tasks').nodemon;

gulp.task('nodemon', function() {
  nodemon(config)
    .on('restart', function() {
      console.log('*** Server Restarted! ***');
    })
});
