/**
 * 登录组件
 * @module scripts/components/LoginBox/LoginIn
 * @requires react
 */


import React from 'react';
import { browserHistory } from 'react-router';
// import 'scripts/components/Mask/_mask'

const LoginIn = (props)=> {
    let accountInput = null,
        passwordInput = null;

    const login = ()=> {
        console.log('账号', accountInput.value);
        console.log('密码', passwordInput.value);
        props.loginInAction();
        browserHistory.push('/user');
    }

    return (
        <div className="login-in">
            <form className="sign-form">
                <input ref={(input) => { accountInput = input; }} required="" type="text" className="account" name="account" aria-label="账号" placeholder="账号" />
                <input ref={(input) => { passwordInput = input; }} required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）" autoComplete="off"/>
            </form>
            <a className="u-btn e-purple e-signin" onClick={login}>登录</a>
        </div>
    );
}

export default LoginIn;
/**
 * 默认属性
 */
LoginIn.defaultProps = {
};
/**
 * 属性类型
 */
LoginIn.propTypes = {
};
