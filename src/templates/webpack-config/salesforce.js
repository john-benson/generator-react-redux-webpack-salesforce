'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const merge = require('webpack-merge');
const PATHS = require('./paths');
const vroConfig = require('../env/common').vroLayerConfig;

module.exports = merge(require('./build'), {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/force-html-webpack-templates/templates/index.ejs',
      appMountId: 'app',
      showHeader: false,
      sidebar: false,
      standardStylesheets: false,
      applyHtmlTag: false,
      applyBodyTag: false,
      remoteObjects: vroConfig.remoteObjects,
      inject: false
    })
  ]
});
