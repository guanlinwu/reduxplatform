/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'scripts/actions/actionCreators';

import Nav from 'scripts/components/Nav/Nav';

/**
 * 智能组件
 */
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav {...this.props}/>
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
