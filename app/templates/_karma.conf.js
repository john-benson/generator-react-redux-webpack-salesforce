const path = require('path');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [ 'mocha', 'chai' ],
    reporters: [ 'spec', 'coverage' ],
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'app/**/*spec.+(jsx|js)'
    ],
    preprocessors: {
      'app/**/*spec.+(jsx|js)': [ 'webpack', 'sourcemap' ]
    },
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      type: 'html'
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
