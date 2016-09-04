/**
 * 总容器
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'scripts/actions/actionCreators';

class App extends Component {
  render() {
    return (
      <div className="g-wrapper">
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

App.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
