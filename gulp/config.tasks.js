// Tasks Config
// ============

var Paths = require('./config.paths');

var Config = {
  // Nodemon
  nodemon: {
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: ['gulp/**/*', 'gulpfile.js', 'public/']
  },
  // BrowserSync
  browserSync: {
    proxy: 'http://localhost:3030'
  },
  // Markup
  markup: {
    src: [Paths.views + '/**/*.jade']
  },
  // CSS
  css: {
    src: Paths.css + '/_main.css',
    dest: Paths.css,
    outputName: 'styles.css',
    cssnext: {
      'browsers': ['last 2 versions'],
      'customProperties': true,
      'colorFunction': true,
      'customSelectors': true,
      'compress': false
    }
  },
  // Watchify
  watchify: {
    files: [
      {
        input: [Paths.app + '/app.js'],
        output: 'app.js',
        dest: Paths.app
      },
      {
        input: [Paths.js + '/vendor.js'],
        output: 'vendor.js',
        dest: Paths.js
      },
      {
        input: [Paths.js + '/site.js'],
        output: 'site.js',
        dest: Paths.js
      }
    ]
  },
  // Watch
  watch: {
    markup: [Paths.views + '/**/*.jade'],
    css: [Paths.css + '/_*.css']
  }
};

module.exports = Config;
