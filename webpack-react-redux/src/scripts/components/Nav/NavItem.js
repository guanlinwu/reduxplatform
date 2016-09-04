/**
 * 导航条子列表
 * @module scripts/components/nav
 * @requires react
 */
'use strict';

import React from 'react';

export default class NavItem extends React.Component {
    constructor(props){
        super(props);
    }
    clickRoute() {
        this.props.goForward({activeIndex: this.props.index});
    }
    render() {
        return (
            <li className={this.props.isActive ? 'item active' : 'item'}><a onClick={this.clickRoute.bind(this)} href="javascript:;">{this.props.content}</a></li>
        );
    }
}
/**
 * 默认属性
 */
NavItem.defaultProps = {
    index    : 0,
    content  : '',
    isActive : false
};
/**
 * 属性类型
 */
NavItem.propTypes = {
    index    : React.PropTypes.number.isRequired,
    content  : React.PropTypes.string.isRequired,
    isActive : React.PropTypes.bool.isRequired
};