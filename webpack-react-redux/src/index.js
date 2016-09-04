/**
 * 入口
 */

/*
*  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';

/*
*  Import Components
*/
import App from 'scripts/containers/App';
import Home from 'scripts/containers/Home';

/* Import CSS */
import 'styles/index.scss';

/* 
* Import data store 
*/
import store, { history } from 'scripts/store';

/*
  Error Logging
*/

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }

/*
* Rendering
*/

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);