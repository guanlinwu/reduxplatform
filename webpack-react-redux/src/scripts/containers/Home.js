/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actlistActionCreators from 'scripts/actions/actlistActionCreators';
import * as navActionCreators from 'scripts/actions/navActionCreators';


import Nav from 'scripts/components/Nav/Nav';
import Actlist from 'scripts/components/Actlist/Actlist';

/**
 * 智能组件
 */
class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="home">
        <Nav nav={this.props.nav} navAction={this.props.navAction}/>
        <Actlist {...this.props} />
      </div>
    );
  }
}

/**
 * 属性类型
 */
Home.propTypes = {
    nav       : PropTypes.object.isRequired,
    navAction : PropTypes.object.isRequired
};

Home.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    nav     : state.nav,
    actlist : state.actlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navAction     : bindActionCreators(navActionCreators, dispatch),
    actlistAction : bindActionCreators(actlistActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
