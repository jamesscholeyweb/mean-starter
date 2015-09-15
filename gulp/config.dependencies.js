// Task Dependencies Config
// ========================

var Depends = {
  default: ['css', 'watch'],
  watch: ['watchify', 'browserSync'],
  browserSync: ['nodemon']
};

module.exports = Depends;
