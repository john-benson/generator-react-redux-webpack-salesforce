const webpack = require('webpack');
const PATHS = require('./paths');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    https: true
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin({ save: true })
  ]
};
