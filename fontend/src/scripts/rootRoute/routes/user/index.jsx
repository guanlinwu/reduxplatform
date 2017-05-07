// import User from 'scripts/containers/User';

export default {
  path: '/user',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('scripts/containers/User').default);
    }, 'User');
  }
};