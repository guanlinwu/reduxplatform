// var REM = (function() {
// 	var _e = {},
// 		_p = {};
// 	_p.rempx = 50;
// 	_e.init = function() {
// 		$(window).on("resize", _p.setSize).resize();
// 	};
// 	_p.setSize = function() {
// 		var w = $(window).width();
// 		_p.rempx = w/750*100;
// 		$('html').css('font-size', _p.rempx);
// 	};

// 	return _e;
// }());

// REM.init();

/**
 * rem库
 */
class REM {
	constructor() {
		this.rempx = 50;
		this.setSize = this.setSize.bind(this);
		this.setSize();
		this.resize();
	}

	setSize() {
		let w      = $(window).width();
		this.rempx = w/750*100;
		document.getElementsByTagName('html')[0].style.fontSize = this.rempx + 'px';
	}

	resize() {
		window.onresize = function() {
			this.setSize();
		}.bind(this);
	}

}

export default REM;