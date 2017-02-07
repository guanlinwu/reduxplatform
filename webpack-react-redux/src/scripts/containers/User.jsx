/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
    this.props.userAction.fetchUserMenus();
  }
  render() {
    return (
      <div className="user">
        <Mask />
        <section className="m-card e-gap-top">
          <UserCard name={'化成风'} imgUrl={'http://pic.maizuo.com/usr/default/maizuomoren66.jpg'}/>
        </section>
        <section className="m-card user-menus e-gap-top">
          <UserMenus {...this.props.user.userMenus}/>
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
  children: PropTypes.object.isRequired
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
