// handleErrors
// ============

var notify = require('gulp-notify');

var handleErrors = function() {

  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: "Compile Error",
    message: "<%= error %>"
  }).apply(this, args);

  this.emit('end');
};

module.exports = handleErrors;
