/**
 * actlist reducers
 */
'use strict';
import sliderReducer from 'scripts/reducers/slider';

export default function actdetail(state = {}, action) {
    switch (action.type) {
    	case 'LOAD_ACTDETAIL' :
			return Object.assign({}, state, action.item);
    	case 'UNMOUNT_ACTDETAIL' :
			return {};
	    case 'UPDATE_STYLE' :
	    	return Object.assign({}, state, {
	    		slider : sliderReducer(state.slider, action)
	    	});
	    case 'UPDATE_BASE' :
          	return Object.assign({}, state, {
	    		slider : sliderReducer(state.slider, action)
	    	});
	    case 'END_ANIMATING' :
	        return Object.assign({}, state, {
	    		slider : sliderReducer(state.slider, action)
	    	});
	    default:
	      return state;
  	}
}