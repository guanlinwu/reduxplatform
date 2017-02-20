import React from 'react';
import { render } from 'react-dom';

/*
*  Import Components
*/
import App from 'scripts/containers/App';
import Home from 'scripts/containers/Home';
import ActDetail from 'scripts/containers/ActDetail';
import User from 'scripts/containers/User';
import Discover from 'scripts/containers/Discover';

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require(Home)).default
      }, 'Home')
    },
  },
  childRoutes: [
    require('./routes/user'),
    require('./routes/actDetail'),
    require('./routes/discover')
  ]
}

ReactDOM.render(
  (
    <Router
      history={browserHistory}
      routes={rootRoute}
      />
  ), document.getElementById('app')
);