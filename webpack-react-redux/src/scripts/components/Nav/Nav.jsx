/**
 * 导航条
 * @module scripts/components/Nav
 * @requires react
 */
'use strict';

import React from 'react';
import NavItem from 'scripts/components/Nav/NavItem';
import 'scripts/components/Nav/_nav';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        console.log('Nav', props);
    }
    render() {
        let {activeIndex, routeArr, iconClassArr} = this.props.nav;
        return (
            <nav className="m-nav">
                <ul className="nav-list">
                    {this.props.nav.contentArr.map((content, index) => <NavItem {...this.props} key={index} index={index} route={routeArr[index]} isActive={activeIndex == index} content={content} iconClass={iconClassArr[index]}/>)}
                </ul>
            </nav>
        );
    }
}
/**
 * 默认属性
 */
Nav.defaultProps = {
    nav    : {}
};
/**
 * 属性类型
 */
Nav.propTypes = {
    nav : React.PropTypes.object.isRequired
};
