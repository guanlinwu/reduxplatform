/**
 * actDetail
 */
import * as CONSTANTS from 'constants';
import * as actDetailModel from '../utils/model/actDetail.js';
//fetch
export function fetchActDetail(id){
  return dispatch => {
    actDetailModel.actDetail(id)
      .then(response => response.json())
      .then(json => dispatch(loadActDetail(json)));
  };
}

export function loadActDetail(item){
  return {
      type : CONSTANTS.LOAD_ACTDETAIL,
      item
  };
}

/**
 * [卸载组件前，销毁数据]
 * @return {object} [action]
 */
export function unmountActDetail(){
  return {
      type : CONSTANTS.UNMOUNT_ACTDETAIL
  };
}