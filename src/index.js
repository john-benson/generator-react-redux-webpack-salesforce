'use strict';

const Base   = require('yeoman-generator').Base;
const chalk  = require('chalk');
const yosay  = require('yosay');
const path   = require('path');
const kebabCase = require('lodash/kebabCase');

let properties = {};

const options = {
  paths: {
    app: 'app',
    presentation: 'app/presentation',
    container: 'app/container',
    appConfig: 'app/config',
    webpackConfig: 'webpack-config',
    env: 'env'
  }
};

module.exports = Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    const done = this.async();

    this.log(yosay(
      `Welcome to the ${chalk.red('react-redux-webpack-salesforce')}`
    ));

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'Whats your app called',
        default : this.appname
      },
      {
        type: 'input',
        name: 'userName',
        message: 'The author\'s name? (for config files)',
        default : this.user.git.name || 'Your Name'
      },
      {
        type: 'input',
        name: 'userMail',
        message: 'Author email? (for config files)',
        default : this.user.git.email || 'email@example.com'
      },
      {
        type: 'input',
        name: 'salesforceAppId',
        message: 'Whats your Salesforce Connected App ID (to use for development)?'
      },
      {
        type: 'input',
        name: 'salesforceApiVersion',
        message: 'What version of the Saleforce REST API do you want to use for development?',
        default: 'v36.0'
      },
      {
        type: 'input',
        name: 'salesforceLoginUrl',
        message: 'What Salesforce login URL do you want to use for development?',
        default: 'https://login.salesforce.com'
      }
    ];

    this.prompt(prompts, props => {
      properties.appName = props.appName;
      properties.userName = props.userName;
      properties.userMail = props.userMail;
      properties.salesforceAppId = props.salesforceAppId;
      properties.salesforceApiVersion = props.salesforceApiVersion;
      properties.salesforceLoginUrl = props.salesforceLoginUrl;
      done();
    });
  },

  copyAppConfig: function () {
    const { paths } = options;

    this.directory(
      paths.appConfig,
      paths.appConfig
    );
  },

  copyWebpackConfig: function () {
    const { paths } = options;

    this.copy(
      path.join(paths.webpackConfig, 'build.js'),
      path.join(paths.webpackConfig, 'build.js')
    );

    this.template(
      path.join(paths.webpackConfig, 'common.js'),
      path.join(paths.webpackConfig, 'common.js'),
      properties
    );

    this.copy(
      path.join(paths.webpackConfig, 'paths.js'),
      path.join(paths.webpackConfig, 'paths.js')
    );

    this.copy(
      path.join(paths.webpackConfig, 'salesforce.js'),
      path.join(paths.webpackConfig, 'salesforce.js')
    );

    this.copy(
      path.join(paths.webpackConfig, 'serve.js'),
      path.join(paths.webpackConfig, 'serve.js')
    );

    this.copy(
      path.join(paths.webpackConfig, 'test.js'),
      path.join(paths.webpackConfig, 'test.js')
    );
  },

  copyApp: function () {
    const { paths } = options;

    this.copy(
      path.join(paths.app, 'index.jsx'),
      path.join(paths.app, 'index.jsx')
    );

    this.copy(
      path.join(paths.app, 'styles.scss'),
      path.join(paths.app, 'styles.scss')
    );
  },

  copyEnv: function () {
    const { paths } = options;

    this.template(
      path.join(paths.env, 'development.js'),
      path.join(paths.env, 'development.js'),
      properties
    );

    this.copy(
      path.join(paths.env, 'common.js'),
      path.join(paths.env, 'common.js')
    );

    this.copy(
      path.join(paths.env, 'production.js'),
      path.join(paths.env, 'production.js')
    );
  },

  copyPresentation: function () {
    const { paths } = options;

    this.directory(
      paths.presentation,
      paths.presentation
    );
  },

  copyContainer: function () {
    const { paths } = options;

    this.directory(
      paths.container,
      paths.container
    );
  },

  copyRoot: function () {
    const { paths } = options;
    const { appName, userName, userEmail } = properties;

    this.copy(
      '_.babelrc',
      '.babelrc'
    );

    this.copy(
      '_.gitignore',
      '.gitignore'
    );

    this.copy(
      '_karma.conf.js',
      'karma.conf.js'
    );

    this.template(
      '_package.json',
      'package.json',
      {
        projectName: kebabCase(appName),
        userName: userName,
        userEmail: userEmail
      }
    );

    this.copy(
      '_README.md',
      'README.md'
    );

    this.copy(
      '_webpack.config.js',
      'webpack.config.js'
    );
  },

  install: function () {
    this.installDependencies({
      skipInstall: options['skip-install'],
      bower: false
    });
  }
});
