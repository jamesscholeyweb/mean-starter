// bundleWatch Function
// ====================
//
// Browserifys and Watchifys bundles as defined in config.tasks

var browserify    = require('browserify'),
    watchify      = require('watchify'),
    gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    colors        = require('colors'),
    source        = require('vinyl-source-stream'),
    browserSync   = require('browser-sync'),
    reload        = browserSync.reload,
    handleErrors  = require('../utils/handleErrors'),
    config        = require('../config.tasks').watchify;

var createBundle = function(options) {

  var bundler = watchify(browserify({
    entries: options.input
  }));

  var reBundle = function() {
    return bundler.bundle()
      .on('error', handleErrors)
      .pipe(source(options.output))
      .pipe(rename({
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest(options.dest))
      .on('end', function() {
        return console.log(options.output.cyan + ' was browserified');
      });
  }; // end rebundle

  bundler.on('update', reBundle);
  bundler.on('update', browserSync.reload);

  bundler.on('log', function(msg) {
    console.log(msg.yellow);
  });

  return reBundle();
}; // end createBundle

var createBundles = function(bundles) {
  return bundles.forEach(function(bundle) {
    return createBundle({
      input: bundle.input,
      output: bundle.output,
      dest: bundle.dest
    });
  });
}; // end createBundles

module.exports = createBundles; // Export function so we can use in task
