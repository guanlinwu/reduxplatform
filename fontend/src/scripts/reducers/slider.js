/**
 * slider reducers
 */
import * as CONSTANTS from 'constants';

export default function slider(state = {}, action) {
  let trackStyle;
  switch (action.type) {
    case CONSTANTS.UPDATE_STYLE:
      trackStyle = Object.assign({}, state.trackStyle, action.item);
      return Object.assign({}, state, {trackStyle: trackStyle});
    case CONSTANTS.UPDATE_BASE:
      return Object.assign({}, state, action.item);
    case CONSTANTS.END_ANIMATING:
      trackStyle = Object.assign({}, state.trackStyle, {
          WebkitTransition : '',
          transition       : ''
      });
      return Object.assign({}, state, {
        animating  : false,
        trackStyle : trackStyle
      });
    default:
      return state;
  }

}