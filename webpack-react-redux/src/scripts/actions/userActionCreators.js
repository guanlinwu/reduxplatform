/**
 * actDetail
 */
//fetch
import * as CONSTANTS from 'constants';
import * as user from '../utils/model/user';

export function fetchUserMenus(){
  return dispatch => {
    user.userMenus()
      .then(response => response.json())
      .then(json => dispatch(loadUserMenu(json)));
  };
}

export function loadUserMenu(item){
  return {
      type : CONSTANTS.LOAD_USERMENUS,
      ...item
  };
}

/**
 * [卸载组件前，销毁数据]
 * @return {object} [action]
 */
export function unmountActDetail(){
  return {
      type : CONSTANTS.UNMOUNT_USER
  };
}