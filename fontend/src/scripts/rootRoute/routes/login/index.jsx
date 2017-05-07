
export default {
  path: '/login/:tag',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('scripts/containers/Login').default);
    }, 'Login');
  }
};