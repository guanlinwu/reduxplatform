/**
 * 入口
 */
/*
*  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

/*
*  Import Components
*/
// import App from 'scripts/components/App';
import Single from 'scripts/components/Single';
import PhotoGrid from 'scripts/components/PhotoGrid';
import Main from 'scripts/components/Main';

/* Import CSS */
// import 'styles/index.scss';

/* 
* Import our data store 
*/
// import store, { history } from 'scripts/store';

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
const router = (
    <Router history={browserHistory}>
      <Route path="*/index.html" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
);


render(
    router,
    document.getElementById('root')
);



// render(
//   <Provider store={store}>
//     { /* Tell the Router to use our enhanced history */ }
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <IndexRoute component={PhotoGrid} />
//         <Route path="/view/:postId" component={Single}></Route>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );