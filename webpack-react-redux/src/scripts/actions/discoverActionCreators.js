/**
 * actDetail
 */
//fetch
export function fetchCategories(category){
  console.log(category)
  if(category == undefined) {return;}
  return dispatch => {
    fetch(`/api/discover/categories/${category}`)
      .then(response => response.json())
      .then(json => dispatch(loadCategories(json, category)));
  };
}

export function loadCategories(item, category){
  return {
      type : 'LOAD_CATEGORIES',
      item,
      category
  };
}

export function toggleSubscribe(item){
  return {
      type : 'TOGGLE_SUBCRIBE',
      item
  };
}

/**
 * [卸载组件前，销毁数据]
 * @return {object} [action]
 */
export function unmountCategories(){
  return {
      type : 'UNMOUNT_CATEGORIES'
  };
}