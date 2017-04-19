/**
 * actlist
 */
import * as CONSTANTS from 'constants';
import * as actListModel from '../utils/model/actList.js';

export function toggleFavor(item){
  return {
      type : CONSTANTS.TOGGLE_FAVOR,
      item
  };
}
//fetch
export function fetchActList(){
  return dispatch => {
    actListModel.actList()
      .then(response => response.json())
      .then(json => dispatch(loadActList(json)));
  };
}

export function loadActList(item){
  return {
      type : CONSTANTS.LOAD_ACTLIST,
      item
  };
}