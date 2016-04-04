import App from '../app';
import Cases from '../../container/cases-list-page';
import OauthCallback from '../oauth';

import { Router, Route, IndexRoute } from 'react-router';
import React, { PropTypes } from 'react';

const Routes = ({ history }) => {
  return (
    <Router history={ history }>
      <Route path="/callback" component={ OauthCallback } />
      <Route path="/" component={ App }>
        <IndexRoute component={ Cases }/>
        <Route path="/list" component={ Cases } />
        <Route path="*" component={ Cases } />
      </Route>
    </Router>
  )
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
