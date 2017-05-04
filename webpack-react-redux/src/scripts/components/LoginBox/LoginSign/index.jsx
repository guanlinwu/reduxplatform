 /**
 * 登录组件
 * @module scripts/components/LoginBox/LoginSign
 * @requires react
 */


import React from 'react';
import { browserHistory } from 'react-router';
// import 'scripts/components/Mask/_mask'

const LoginSign = (props)=> {
  let nameInput = null,
      accountInput = null,
      passwordInput = null,
      repeatPasswordInput = null;

  const signIn = ()=> {
    console.log('姓名：', nameInput.value);
    console.log('账号：', accountInput.value);
    console.log('密码', passwordInput.value);
    console.log('确认密码', repeatPasswordInput.value);

    /**
     * 此处发送请求，然后返回请求结果，成功则跳到个人中心页面
     */
  }

  return (
      <div className="login-out">
          <form className="sign-form">
            <input ref={(input) => { nameInput = input; }} required="" type="text" name="fullname" aria-label="姓名" placeholder="姓名"/>
            <input ref={(input) => { accountInput = input; }} required="" type="text" className="account" name="account" aria-label="账号" placeholder="账号" />
            <input ref={(input) => { passwordInput = input; }} required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）" autoComplete="off"/>
            <input ref={(input) => { repeatPasswordInput = input; }} required="" type="repeatPassword" name="repeatPassword" aria-label="密码" placeholder="重复确认密码" autoComplete="off"/>
          </form>
          <a className="u-btn e-purple e-signup" onClick={signIn}>注册</a>
      </div>
  );
}

export default LoginSign;
/**
 * 默认属性
 */
LoginSign.defaultProps = {
};
/**
 * 属性类型
 */
LoginSign.propTypes = {
};
