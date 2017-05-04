/*
*  Import Components
*/
import App from 'scripts/containers/App';

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
    require('./routes/login').default,
    require('./routes/redirect').default,
  ]
};
