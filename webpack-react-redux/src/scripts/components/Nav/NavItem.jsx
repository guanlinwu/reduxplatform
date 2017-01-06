/**
 * 导航条子列表
 * @module scripts/components/nav
 * @requires react
 */
'use strict';

import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class NavItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let {route, index} = this.props;
        return (
            <li className='item'>
                {index == 0 ? <IndexLink activeClassName="active" href="javascript:;" to={route}>{this.props.content}</IndexLink> : <Link activeClassName="active" href="javascript:;" to={route}>{this.props.content}</Link>}
            </li>
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
    index     : React.PropTypes.number.isRequired,
    content   : React.PropTypes.string.isRequired,
    route     : React.PropTypes.string.isRequired,
    navAction : React.PropTypes.object.isRequired,
    isActive  : React.PropTypes.bool.isRequired
};