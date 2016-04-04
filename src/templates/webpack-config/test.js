const PATHS = require('./paths');

module.exports = {
  devtool: 'inline-source-map',
  entry: {  },
  resolve: {
    alias: {
      'app': PATHS.app
    }
  },
  module: {
    preLoaders: [{
      test: /^((?!spec).)*\.(jsx|js)$/,
      loaders: [ 'isparta-instrumenter' ],
      include: PATHS.app
    }],
    loaders: [{
      test: /\.scss$/,
      loaders: [ 'style', 'css', 'sass' ]
    }],
  }
}
