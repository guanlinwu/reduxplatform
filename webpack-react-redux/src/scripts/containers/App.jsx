/**
 * 总容器
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navActionCreators from 'scripts/actions/navActionCreators';
import Rem from 'scripts/utils/libraries/Rem';

import Nav from 'scripts/components/Nav/Nav';

class App extends Component {
  componentDidMount() {
    const rem = new Rem();
  }
  render() {
    let {pathname} = this.props.location;
    return (
      <div className="g-wrapper">
        <div className="f-fix e-bottom e-zindex-loading">
          {!/actdetail/i.test(pathname) && <Nav nav={this.props.nav} navAction={this.props.navAction}/>}
        </div>
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
