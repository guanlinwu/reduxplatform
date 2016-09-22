/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'scripts/actions/actionCreators';

import Nav from 'scripts/components/Nav/Nav';
import Actlist from 'scripts/components/Actlist/Actlist';

/**
 * 智能组件
 */
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav nav={this.props.nav} goForward={this.props.goForward}/>
        <Actlist {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    nav: state.nav,
    actlist: state.actlist
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps)(Home);
