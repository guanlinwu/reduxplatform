/**
 * 入口
 */

/*
*  Import Dependencies
*/
import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Redirect} from 'react-router';

/*
*  Import Contaniers
*/
import App from 'scripts/containers/App';
import Home from 'scripts/containers/Home';
import ActDetail from 'scripts/containers/ActDetail';
import User from 'scripts/containers/User';
import Discover from 'scripts/containers/Discover';

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
        <Route path="/user" component={User}/>
        <Route path="actDetail/:id" component={ActDetail}/>
        <Route path="/discover" component={Discover}/>
        <Redirect from="/none" to="/" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);