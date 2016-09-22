/**
 * actlist reducers
 */
'use strict';

export default function actlist(state = {}, action) {
  switch (action.type) {
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
    return ([
      ...actOptionArr.slice(0, index),
      actOption,
      ...actOptionArr.slice(index+1)
    ]);
		break;
    default:
      return state;
  }
}