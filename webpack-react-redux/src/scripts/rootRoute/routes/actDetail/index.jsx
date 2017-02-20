import ActDetail from 'scripts/containers/ActDetail';

export default {
  path: 'actDetail',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require(ActDetail))
    }, 'ActDetail')
  }
}