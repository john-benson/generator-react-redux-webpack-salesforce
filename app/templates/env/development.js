const common = require('./common');
const merge = require('lodash/merge');
const path = require('path');

const callbackUrl = window.location.origin + '/callback';

module.exports = merge(common, {
  vroLayerConfig: {
    appId: '<%= salesforceAppId %>',
    apiVersion: '<%= salesforceApiVersion %>',
    loginUrl: '<%= salesforceLoginUrl %>',
    oauthCallbackURL: callbackUrl,
    useProxy: true
  }
});
