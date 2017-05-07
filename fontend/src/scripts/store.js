/**
*  Store
*
*  Redux apps have a single store which takes
*  1. All Reducers which we combined into `rootReducer`
*  2. An optional starting state - similar to React's getInitialState
*/

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'scripts/reducers/index';

import nav from 'scripts/initialStates/nav';
import actlist from 'scripts/initialStates/actlist';
import actdetail from 'scripts/initialStates/actdetail';
import user from 'scripts/initialStates/user';
import discover from 'scripts/initialStates/discover';

import { createLogger } from 'redux-logger';

const defaultState = {
    nav,
    actlist,
    actdetail,
    user,
    discover
};

let middlewares = [thunkMiddleware];

// if (process.env.NODE_ENV !== 'production') {
  // require.ensure([], (require) => {
    // let { createLogger } = require('redux-logger');
    const loggerMiddleware = createLogger();
    middlewares = [ ...middlewares, loggerMiddleware ];
  // }, 'reduxLogger');
// }
/**
* 结合谷歌扩展插件
* @see https://github.com/zalmoxisus/redux-devtools-extension#implementation
*/
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, compose(
  applyMiddleware(
    ...middlewares
  ),
  enhancers
));
/**
* we export history because we need it in `reduxstagram.js` to feed into <Router>
*/
export const history = syncHistoryWithStore(browserHistory, store);

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
