// Main gulpfile
// =============

var requireDir = require('require-dir');

// Require all tasks from gulp/tasks
requireDir('./gulp/tasks', {recurse: true});
