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
import App from 'scripts/components/App';
import Single from 'scripts/components/Single';
import PhotoGrid from 'scripts/components/PhotoGrid';

/* Import CSS */
// import 'styles/index.scss';

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
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);