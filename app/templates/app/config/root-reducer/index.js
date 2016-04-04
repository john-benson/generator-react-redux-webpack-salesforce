import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import casesReducer from '../../container/cases-list-page/reducer';
import storeReducer from '../configure-store/reducer'

export default combineReducers({
  routing: routerReducer,
  cases: casesReducer,
  store: storeReducer
});
