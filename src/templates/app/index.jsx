require('./styles.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './presentation/root';

import configureStore from './config/configure-store';
import rootReducer from './config/root-reducer';
import configureHistory from './config/history';
import configureForce from './config/force';

const store = configureStore();
const history = configureHistory(store);
configureForce();

ReactDOM.render(
  <Root store={ store } history={ history } />
, document.getElementById('app'));
