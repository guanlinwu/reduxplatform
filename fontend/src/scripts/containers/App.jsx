/**
 * 总容器
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navActionCreators from 'scripts/actions/navActionCreators';
import Rem from 'scripts/utils/libraries/Rem';

/*
*  Import Components
*/
import ToTop from 'scripts/components/ToTop';
import Nav from 'scripts/components/Nav/Nav';

class App extends Component {
  componentDidMount() {
    new Rem();
  }
  render() {
    let {pathname} = this.props.location;
    return (
      <div>
        <div className="f-fix e-bottom e-zindex-loading">
          {!/actdetail/i.test(pathname) && <Nav nav={this.props.nav} navAction={this.props.navAction}/>}
        </div>
        {!!this.props.children && React.cloneElement(this.props.children, this.props) }
        <ToTop />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

const mapStateToProps = (state) => ({
  nav     : state.nav
});

const mapDispatchToProps = (dispatch) => ({
  navAction     : bindActionCreators(navActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
