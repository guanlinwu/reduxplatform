/**
 * actlist reducers
 */
'use strict';

export default function actlist(state = {}, action) {
  switch (action.type) {
    /*
     收藏活动
     */
    case 'TOGGLE_FAVOR' :

      let actOptionArr   = state,
        index            = action.item.index,
        actOption        = actOptionArr[index],
        detailBox        = actOption.detailBox;
		if(!detailBox.hasfavor) {
      actOption.detailBox = Object.assign({}, actOption.detailBox, {
        favor : actOption.detailBox.favor + 1,
        hasfavor : true
      });
		}
    else {
      actOption.detailBox = Object.assign({}, actOption.detailBox, {
        favor : actOption.detailBox.favor - 1,
        hasfavor : false
      });
    }
    return [
      ...actOptionArr.slice(0, index),
      actOption,
      ...actOptionArr.slice(index+1)
    ];
    /*
     加载请求到的活动列表
     */
    case 'LOAD_ACTLIST' :
    return [
      ...state,
      ...action.item
    ];
    default:
      return state;
  }
}