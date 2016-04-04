'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

let common = require('./webpack-config/common');

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, require('./webpack-config/serve'));
}

if(TARGET === 'build' || TARGET === 'stats') {
  module.exports = merge(common, require('./webpack-config/build'))
}

if(TARGET === 'test' || TARGET === 'tdd') {
  common.entry = {}; // override entry to avoid errors
  module.exports = merge(common, require('./webpack-config/test'))
};

if(TARGET === 'build:salesforce') {
  common.plugins = common.plugins.filter(item => {
    return !(item instanceof HtmlWebpackPlugin)
  });

  const test = merge(common, require('./webpack-config/salesforce'));
  module.exports = test;
}
