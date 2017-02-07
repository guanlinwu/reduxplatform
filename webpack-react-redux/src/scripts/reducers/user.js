/**
 * user reducers
 */
'use strict';

export default function user(state = {}, action) {
  switch (action.type) {
  	case 'LOAD_USERMENUS' :
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
    default:
      return state;
  }
}