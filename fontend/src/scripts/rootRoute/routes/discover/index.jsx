// import Discover from 'scripts/containers/Discover';

export default {
  path: '/discover',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('scripts/containers/Discover').default);
    }, 'Discover');
  }
};