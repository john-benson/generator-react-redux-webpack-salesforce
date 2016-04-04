require('./styles.scss');

import React, { PropTypes } from 'react';
import Header from '../../presentation/header';

let App = ({ children }) => (
  <div className='app-container'>
    <Header />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
