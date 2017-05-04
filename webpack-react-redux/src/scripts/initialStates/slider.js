/**
 * 轮播数据
 * @type {Object}
 */
const slider = {
	speed            : 500,
	trackStyle       : {
		WebkitTransform  :'translate3d(0px, 0px, 0px)',
		transform        :'translate3d(0px, 0px, 0px)'
	},
	//当前走马灯页面
	activeIndex      : 0,
	//走马灯的dom
	width            : 0,
	slideWidth 		 : 0,
	animating 		 : false,
	sliderCount      : 0
};

export default slider;