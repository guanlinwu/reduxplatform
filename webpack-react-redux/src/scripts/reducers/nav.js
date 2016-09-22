/**
 * nav reducers
 */
'use strict';

export default function nav(state = {}, action) {
  switch (action.type) {
    case 'GO_NAV_FORWARD' :
      return {
        activeIndex : action.item.activeIndex,
        contentArr  : state.contentArr
      };
      break;
    default:
      return state;
  }
}