/**
 * 主页容器
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actlistActionCreators from 'scripts/actions/actlistActionCreators';


import Actlist from 'scripts/components/ActList/ActList';

/**
 * 智能组件
 */
class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="home">
        <Actlist {...this.props} />
      </div>
    );
  }
}

/**
 * 属性类型
 */
Home.propTypes = {
};

Home.propTypes = {
  children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  actlist : state.actlist
});

const mapDispatchToProps = (dispatch) => ({
  actlistAction : bindActionCreators(actlistActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
