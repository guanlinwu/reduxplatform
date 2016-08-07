/**
 * 样式处理扩展库
 * @module public/libraries/jqueryStyle
 * @requires jquery
 * @desciption
 * 主要扩展 $ 的库，通过扩展可以支持 CSS3 的动画效果
 * 大大优化了性能
 */

'use strict';

/**
 * @external $
 * @see http://api.jquery.com/
 */

var $ = require('jquery');

/**
 * 为属性添加 CSS3 前缀 [-webkit-, -o-, -ms-, -moz-]
 * @function external:$.prefixStyle
 * @param   {string} style CSS3 属性
 * @return  {string} 加了前缀的 css3 样式属性名称
 */
$.prefixStyle = (function() {
    var _elementStyle = document.createElement('div').style,
        _vendor = (function() {
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                transform,
                l = vendors.length;

            for (; l > 0; l --) {
                transform = vendors[l] + 'ransform';

                if (transform in _elementStyle) {
                    return vendors[l].substr(0, vendors[l].length -1);
                }
            }

            return false;
        })();

    return function(style) {
        if (_vendor === false) {
            return false;
        }

        if (_vendor === '') {
            return style;
        }

        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    };
})();

/**
 * @external "$.fn"
 * @see http://api.jquery.com/$.fn.extend/
 */

/**
 * 运行 CSS3 动画
 * @function external:"$.fn".transition
 * @param  {object}  trigger             变化的CSS属性
 * @param  {object}  options             选项
 * @param  {boolean} options.animation   是否为动画事件[animation, transition]，默认为 transition
 * @param  {string}  options.property    部分属性动画，默认 all
 * @param  {string}  options.duration    动画时间，默认 .35s
 * @param  {string}  options.timing      动画类型，默认 ease-out
 * @param  {string}  options.delay       延迟时间，默认 0s
 * @return {$}
 * @example
 * $('#element').transition({ animation: 'fadeIn' });
 */
$.fn.transition = (function() {
    var $transition = function(trigger, options) {
        options = options || {};

        var $this        = $(this),
            deferred     = $.Deferred(),
            endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

        var transitionEndHandler = function() {
            $this.unbind(endEventName, transitionEndHandler);
            deferred.resolve($this);
            $this.css('transition', '');
        };

        $this.css('transition', [options.property || 'all', options.duration || '.35s', options.timing || 'ease-out', options.delay || '0s'].join(' '));
        endEventName && $this.bind(endEventName, transitionEndHandler);

        setTimeout(function() {
            if ('string' === typeof trigger) {
                $this.addClass(trigger);
            }
            else if ('function' === typeof trigger) {
                trigger($this);
            }
            else if ('object' === typeof trigger) {
                $this.css(trigger);
            }

            if (!endEventName) {
                deferred.resolve($this);
            }
        });

        var promise = deferred.promise();
        promise.cancel = function() {
            endEventName && $this.unbind(endEventName, transitionEndHandler);
            deferred.reject('Transition cancelled');
            $this.css('transition', '');
        };

        return promise;
    };

    var transElement = document.createElement('trans'),
        transitionEndEventNames = {
            'webkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'transition': 'transitionend'
        },
        animationEndEventNames = {
            'WebkitTransition': 'webkitAnimationEnd',
            'MozTransition': 'animationend',
            'OTransition': 'oAnimationEnd',
            'transition': 'animationend'
        };

    var findEndEventName = function(endEventNames) {
        var name;

        for (name in endEventNames) {
            if (undefined !== transElement.style[name]) {
                return endEventNames[name];
            }
        }
    };

    $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
    $transition.animationEndEventName = findEndEventName(animationEndEventNames);
    return $transition;
})();

/**
 * CSS3 transform translate 方法
 * @function external:"$.fn".translate
 * @param  {number} distX x坐标
 * @param  {number} distY Y坐标
 * @return {$}
 * @example
 * $('#translate').translate(100, 100);
 */
$.fn.translate = function(distX, distY) {
    this.css($.prefixStyle('transform'), 'translate(' + (/(px|rem|em|pt|%)$/.test(distX) ? distX : distX + 'px') + ',' + (/(px|rem|em|pt|%)$/.test(distY) ? distY : distY + 'px') + ')');
    return this;
};

/**
 * 获取 CSS3 translate 动画移动过程中的位置
 * @function external:"$.fn".translate
 * @return {object} translate x, y 坐标
 * @example
 * $('#translate').getComputedPosition();
 */
$.fn.getComputedPosition = function() {
    var elem = this[0],
        matrix = window.getComputedStyle(elem, null),
        x,
        y;

    matrix = matrix[$.prefixStyle('transform')];
    if (matrix && matrix !== 'none') {
        matrix = matrix.split(')')[0].split(', ');
        x = +(matrix[12] || matrix[4]);
        y = +(matrix[13] || matrix[5]);

        return { x: x, y: y };
    }

    return {};
};

/**
 * @external "$.event.special"
 * @see http://api.jquery.com/category/events/
 */

/**
 * 添加 transitionEnd 监听事件
 * @function external:"$.event.special".transitionEnd
 * @return {$}
 * @example
 * $('#translate').on('transitionEnd', function() {
 *      // do something...
 * });
 */
if ($.event.special) {
    $.event.special.transitionEnd = (function() {
        var transitionEnd = function() {
            var el = document.createElement('div'),
                transEndEventNames = {
                    WebkitTransition : 'webkitTransitionEnd',
                    MozTransition    : 'transitionend',
                    OTransition      : 'oTransitionEnd otransitionend',
                    transition       : 'transitionend'
                };

            for (var name in transEndEventNames) {
                if (undefined !== el.style[name]) {
                    return {
                        end: transEndEventNames[name]
                    };
                }
            }

            return false;
        };

        var _transitionEnd_ = $.support.transition = transitionEnd();

        if (false === _transitionEnd_) {
            return;
        }

        return {
            bindType: _transitionEnd_.end,
            delegateType: _transitionEnd_.end,
            handle: function(event) {
                if ($(event.target).is(this)) {
                    return event.handleObj.handler.apply(this, arguments);
                }
            }
        };
    })();
}