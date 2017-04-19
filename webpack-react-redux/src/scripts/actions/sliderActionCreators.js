/**
 * slider
 */
/*
 更新轮播的父元素样式
 */
import * as CONSTANTS from 'constants';

export function updateStyle(item){
  return {
    type: CONSTANTS.UPDATE_STYLE,
    item
  };
}

/*
 更新轮播模块一级数据
 */
export function updateBase(item){
  return {
    type: CONSTANTS.UPDATE_BASE,
    item
  };
}

/*
 触发结束动画的标志
 */
export function endAnimating(){
  return {
    type: CONSTANTS.END_ANIMATING
  };
}