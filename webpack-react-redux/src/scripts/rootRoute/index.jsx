/*
*  Import Components
*/
import App from 'scripts/containers/App';
// import Home from 'scripts/containers/Home';

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('scripts/containers/Home').default);
      }, 'Home');
    },
  },
  childRoutes: [
    require('./routes/actDetail').default,
    require('./routes/user').default,
    require('./routes/discover').default,
    require('./routes/redirect').default,
  ]
};
