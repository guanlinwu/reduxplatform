/**
 * slider reducers
 */
'use strict';

export default function slider(state = {}, action) {
  let trackStyle;
  switch (action.type) {
    case 'UPDATE_STYLE' :
      trackStyle = Object.assign({}, state.trackStyle, action.item);
      return Object.assign({}, state, {trackStyle: trackStyle});
    case 'UPDATE_BASE' :
      return Object.assign({}, state, action.item);
    case 'END_ANIMATING' :
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