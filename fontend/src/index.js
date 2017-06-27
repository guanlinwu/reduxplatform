/*
*  Import Dependencies
*/
import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router} from 'react-router';
import rootRoute from 'scripts/rootRoute';

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
    <Router history={history} routes={rootRoute} />
  </Provider>,
  document.getElementById('root')
);
