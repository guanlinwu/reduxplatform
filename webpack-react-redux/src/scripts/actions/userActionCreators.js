/**
 * actDetail
 */
//fetch
export function fetchUserMenus(){
  return dispatch => {
    fetch(`/api/user/userMenus`)
      .then(response => response.json())
      .then(json => dispatch(loadUserMenu(json)));
  };
}

export function loadUserMenu(item){
  return {
      type : 'LOAD_USERMENUS',
      ...item
  };
}

/**
 * [卸载组件前，销毁数据]
 * @return {object} [action]
 */
export function unmountActDetail(){
  return {
      type : 'UNMOUNT_USER'
  };
}