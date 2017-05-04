/**
 * 遮罩组件
 * @module scripts/components/NavBar
 * @requires react
 */
import React from 'react';
import 'scripts/components/NavBar/_navBar'

const NavBar = (props)=> {
    const { text } = props;
    return (
        <section className="m-navbar e-fixed-bottom e-border-top">
            <div className="navbar-container f-clearfix">
                <a className="u-btn e-purple e-full">{text}</a>
            </div>
        </section>
    );
};

export default NavBar;
/**
 * 默认属性
 */
NavBar.defaultProps = {
};
/**
 * 属性类型
 */
NavBar.propTypes = {
};
