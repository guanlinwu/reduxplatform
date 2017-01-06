/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as navActionCreators from 'scripts/actions/navActionCreators';

import 'styles/page/_user.scss';

/**
 * 智能组件
 */
class User extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="user">
        <section>
          <header >
            <h1 className="head-title">React</h1>
          </header>
          <nav className="sign-nav">
            <a href="javascript:;">注册</a>
            <a className="active" href="javascript:;">登录</a>
          </nav>
          <div className="f-none">
            <form className="sign-form">
              <input required="" type="text" name="fullname" aria-label="姓名" placeholder="姓名"/>
              <input required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）" autoComplete="off"/>
            </form>
              <a className="u-btn e-purple e-signin" href="javascript:;">登录</a>
          </div>
          <div>
            <form className="sign-form">
              <input required="" type="text" name="fullname" aria-label="姓名" placeholder="姓名"/>
              <input required="" type="text" className="account" name="account" aria-label="账号" placeholder="账号" />
              <input required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）" autoComplete="off"/>
            </form>
              <a className="u-btn e-purple e-signup" href="javascript:;">注册</a>
          </div>
        </section>
      </div>
    );
  }
}

/**
 * 属性类型
 */
User.propTypes = {
};

User.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // navAction     : bindActionCreators(navActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
