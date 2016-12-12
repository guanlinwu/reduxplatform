/**
 * slider
 */
/*
 更新轮播的父元素样式
 */
export function updateStyle(item){
  return {
    type: 'UPDATE_STYLE',
    item
  };
}

/*
 更新轮播模块一级数据
 */
export function updateBase(item){
  return {
    type: 'UPDATE_BASE',
    item
  };
}

/*
 触发结束动画的标志
 */
export function endAnimating(){
  return {
    type: 'END_ANIMATING'
  };
}