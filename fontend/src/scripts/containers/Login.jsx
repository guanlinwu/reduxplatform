/**
 * 主页容器
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActionCreators from 'scripts/actions/userActionCreators';

import LoginBox from 'scripts/components/LoginBox';

/**
 * 智能组件
 */
class Login extends Component {
  componentDidMount() {
    console.log('Login', this.props);
  }
  render() {
    let {tag} = this.props.params;
    return (
      <div className="login">
          <LoginBox loginInAction={this.props.loginInAction} tag={tag} />
      </div>
    );
  }
}

/**
 * 属性类型
 */
Login.propTypes = {
};

Login.propTypes = {
  children   : PropTypes.object.isRequired,
  login      : PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    login : state.user.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginInAction     : () => dispatch(userActionCreators.loginIn())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
