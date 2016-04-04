import Routes from '../routes';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../../presentation/dev-tools';

const Root = ({ store, history }) => {
  return (
    <Provider store={ store }>
      <div>
        <Routes history={ history } />
        { process.env.NODE_ENV !== 'production' ? (<DevTools store={ store } />) : ''}
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
