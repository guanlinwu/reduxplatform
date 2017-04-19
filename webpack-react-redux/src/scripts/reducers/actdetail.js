/**
 * actlist reducers
 */
import * as CONSTANTS from 'constants';
import sliderReducer from 'scripts/reducers/slider';

export default function actdetail(state = {}, action) {
    switch (action.type) {
    	case CONSTANTS.LOAD_ACTDETAIL :
			return Object.assign({}, state, action.item);
    	case CONSTANTS.UNMOUNT_ACTDETAIL :
			return {};
	    case CONSTANTS.UPDATE_STYLE :
	    case CONSTANTS.UPDATE_BASE :
	    case CONSTANTS.END_ANIMATING :
	        return Object.assign({}, state, {
	    		slider : sliderReducer(state.slider, action)
	    	});
	    default:
	      return state;
  	}
}
// function actetailApp(state = {}, action) {
// 	switch (action.type) {
//     	case 'LOAD_ACTDETAIL' :
// 			return Object.assign({}, state, action.item);
// 	default:
//       return state;
//   }
// };

// export default function actdetail(state = {}, action) {
//   return {
//     ...state,
//     slider: todos(state.todos, action)
//   }
// }
// export default function actdetail(state = {}, action) {
//     switch (action.type) {
//     	case 'LOAD_ACTDETAIL' :
// 			return Object.assign({}, state, action.item);
//     	case 'UNMOUNT_ACTDETAIL' :
// 			return {};
// 	    case 'UPDATE_STYLE' :
// 	    	return Object.assign({}, state, {
// 	    		slider : sliderReducer(state.slider, action)
// 	    	});
// 	    case 'UPDATE_BASE' :
//           	return Object.assign({}, state, {
// 	    		slider : sliderReducer(state.slider, action)
// 	    	});
// 	    case 'END_ANIMATING' :
// 	        return Object.assign({}, state, {
// 	    		slider : sliderReducer(state.slider, action)
// 	    	});
// 	    default:
// 	      return state;
//   	}
// }