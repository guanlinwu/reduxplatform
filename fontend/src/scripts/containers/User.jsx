/**
 * 主页容器
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as userActionCreators from 'scripts/actions/userActionCreators';

import Mask from 'scripts/components/Mask';
import UserCard from 'scripts/components/UserCard';
import UserMenus from 'scripts/components/UserMenus';
import 'styles/page/_user.scss';

/**
 * 智能组件
 */
class User extends Component {
  componentDidMount() {
    console.log('user', this.props);
    let {isLogin} = this.props.user.login;
    if(isLogin) {
      /*
      如果已经登陆
       */
      this.props.userAction.fetchUserMenus();
    }
    else {
      /*
      没有登陆，则默认跳去注册页面
       */
      browserHistory.push('/login/sign')
    }
  }
  render() {
    let { isLogin } = this.props.user.login;
    return (
      <div className="user">
        <Mask />
        <section className="m-card e-gap-top">
            {isLogin && <UserCard name={'化成风'} imgUrl={'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507024497.webp'}/>}
        </section>
        <section className="m-card user-menus e-gap-top">
          <UserMenus {...this.props.user.userMenus}/>
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
  children   : PropTypes.object.isRequired,
  user       : PropTypes.object.isRequired,
  userAction : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user : state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAction     : bindActionCreators(userActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
