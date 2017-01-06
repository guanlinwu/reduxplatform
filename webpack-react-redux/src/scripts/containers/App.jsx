/**
 * 总容器
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navActionCreators from 'scripts/actions/navActionCreators';

import Nav from 'scripts/components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="g-wrapper">
        <Nav nav={this.props.nav} navAction={this.props.navAction}/>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  nav     : state.nav
});

const mapDispatchToProps = (dispatch) => ({
  navAction     : bindActionCreators(navActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
