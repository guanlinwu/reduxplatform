/**
 * user reducers
 */
import * as CONSTANTS from 'constants';

export default function user(state = {}, action) {
  switch (action.type) {
  	case CONSTANTS.LOAD_USERMENUS :
		return {...state, userMenus :
  			{
				collect : {
					...state.userMenus.collect,
					...action.collect
				},
				follow : {
					...state.userMenus.follow,
					...action.follow
				},
				setting : {
					...state.userMenus.setting,
					...action.setting
				}
  			}
  		};
    case CONSTANTS.LOGININ:
        return {
            ...state,
                login : {
                isLogin: true
            }
        }
    default:
      return state;
  }
}