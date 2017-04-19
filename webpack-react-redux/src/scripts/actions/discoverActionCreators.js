/**
 * actDetail
 */
//fetch
import * as CONSTANTS from 'constants';
import * as discoverModel from '../utils/model/discover';

export function fetchCategories(category){
  if(category === undefined) {return;}
  return dispatch => {
    discoverModel.categories(category)
      .then(response => response.json())
      .then(json => dispatch(loadCategories(json, category)));
  };
}

export function loadCategories(item, category){
  return {
      type : CONSTANTS.LOAD_CATEGORIES,
      item,
      category
  };
}

export function toggleSubscribe(item){
  return {
      type : CONSTANTS.TOGGLE_SUBCRIBE,
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