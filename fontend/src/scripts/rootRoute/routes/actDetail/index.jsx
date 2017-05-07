// import ActDetail from 'scripts/containers/ActDetail';

export default {
  path: '/actDetail/:id',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('scripts/containers/ActDetail').default);
    }, 'ActDetail');
  }
};