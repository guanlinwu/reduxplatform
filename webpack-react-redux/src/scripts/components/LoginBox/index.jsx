/**
 * 登录组件
 * @module scripts/components/LoginBox
 * @requires react
 */


import React from 'react';
import {Link} from 'react-router';
import 'scripts/components/LoginBox/_loginBox';

import LoginIn from './LoginIn';
import LoginSign from './LoginSign';

const LoginBox = (props)=> {
    let tag = props.tag;
    return (
        <div className="login-box">
            <header >
                <h1 className="head-title">React</h1>
            </header>
            <nav className="sign-nav">
                <Link activeClassName="active" to="/login/sign">注册</Link>
                <Link activeClassName="active" to="/login/in">登录</Link>
            </nav>
            {tag && tag === 'sign' ? <LoginSign /> : <LoginIn loginInAction={props.loginInAction} />}
        </div>
    );
}

export default LoginBox;
/**
 * 默认属性
 */
LoginBox.defaultProps = {
    tag : 'sign'
};
/**
 * 属性类型
 */
LoginBox.propTypes = {
};
