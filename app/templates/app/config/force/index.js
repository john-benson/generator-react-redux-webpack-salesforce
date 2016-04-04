import { init } from 'force-vrolayer';
import merge from 'lodash/merge';

module.exports = (state) => {
  init(require('appConfig').vroLayerConfig);
};
