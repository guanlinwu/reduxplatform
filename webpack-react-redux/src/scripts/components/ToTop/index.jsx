/**
 * 遮罩组件
 * @module scripts/components/ToTop
 * @requires react
 */


import React from 'react';
import 'scripts/components/ToTop/_toTop';

export default class ToTop extends React.Component {
    constructor(props){
        super(props);
        console.log('ToTop', props);
        this.toTop = this.toTop.bind(this);
    }

    toTop() {
        let bg = this.refs.bg;
        bg.style.animationName = 'click-menus-animate';
        setTimeout(function() {
            bg.style.animationName = 'none';
        }, 1200);
        window.scroll(0,0);
    }

    render() {
        return (
            <div className="u-to-top" onClick={this.toTop}>
                <div className="bg"  ref="bg"></div>
                <i className="iconfont icon-to-top"></i>
            </div>
        );
    }
}
/**
 * 默认属性
 */
ToTop.defaultProps = {
};
/**
 * 属性类型
 */
ToTop.propTypes = {
};
