/**
 * 导航条子列表
 * @module scripts/components/nav
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';
import {IndexLink, Link} from 'react-router';

export default class NavItem extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        let {route, index, iconClass} = this.props;
        return (
            <li className='item'>
                {index === 0 ?
                <IndexLink activeClassName="active" to={route}>
                    <i className={"iconfont " + iconClass}></i>
                    <span>{this.props.content}</span>
                </IndexLink>
                :
                <Link activeClassName="active" to={route}>
                    <i className={"iconfont " + iconClass}></i>
                    <span>{this.props.content}</span>
                </Link>}
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
    index     : PropTypes.number.isRequired,
    content   : PropTypes.string.isRequired,
    route     : PropTypes.string.isRequired,
    isActive  : PropTypes.bool.isRequired
};