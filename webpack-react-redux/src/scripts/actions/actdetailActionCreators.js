/**
 * actDetail
 */
//fetch
export function fetchActDetail(id){
  console.log(`/actdetail/${id}`)
  return dispatch => {
    fetch(`/api/actdetail/${id}`)
      .then(response => response.json())
      .then(json => dispatch(loadActDetail(json)));
  };
}

export function loadActDetail(item){
  return {
      type : 'LOAD_ACTDETAIL',
      item
  };
}

/**
 * [卸载组件前，销毁数据]
 * @return {object} [action]
 */
export function unmountActDetail(){
  return {
      type : 'UNMOUNT_ACTDETAIL'
  };
}