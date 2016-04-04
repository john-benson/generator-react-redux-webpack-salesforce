'use strict';

const webpack = require('webpack');
const pkg = require('../package.json');
const path = require('path');
const PATHS = require('./paths');
const TARGET = process.env.npm_lifecycle_event;

const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies).filter(function (v) {
      return v.indexOf('.scss') < 0
    })
  },
  module: {
    loaders: [
      {
        test: /\.(scss|css|sass)?$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
      }
    ]
  },
  plugins: [
    new CleanPlugin([PATHS.build], { root: process.cwd() }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
