import rootReducer from '../root-reducer';
import { createStore, compose, applyMiddleware } from 'redux';
import normalizrMiddleware from 'redux-normalizr-middleware';
import DevTools from '../../presentation/dev-tools';
import {persistStore, autoRehydrate} from 'redux-persist';
import merge from 'lodash/merge';
import { restoreStoreFinished } from './actions';
import thunk from 'redux-thunk';

const enchancers = [
  applyMiddleware(thunk, normalizrMiddleware()),
  autoRehydrate(),
  DevTools.instrument()
];

const enchancer = compose.apply(null, enchancers);

const configureStore = () => {
  const store = createStore(rootReducer, enchancer);

  if(module.hot) {
    module.hot.accept('../root-reducer', () => {
      store.replaceReducer(require('../root-reducer'));
    });
  }

  persistStore(store, { blacklist: ['store'] }, () => {
    store.dispatch(restoreStoreFinished());
  });

  return store;
}

export default configureStore;
