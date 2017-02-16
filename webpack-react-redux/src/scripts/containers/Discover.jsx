/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import 'styles/page/_discover.scss';

/**
 * 智能组件
 */
class Discover extends Component {
  componentDidMount() {
    console.log('Discover', this.props);
  }
  render() {
    return (
      <div className="discover">
        <section className="m-librarys">
          <ul className="library">
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://img3.doubanio.com/lpic/s29259503.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://qnmob2.doubanio.com/img/files/file-1487071049.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2388938156.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://img3.doubanio.com/lpic/s29259503.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://qnmob2.doubanio.com/img/files/file-1487071049.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2388938156.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://img3.doubanio.com/lpic/s29259503.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://qnmob2.doubanio.com/img/files/file-1487071049.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item">
              <h3 className="title">摄影</h3>
              <div className="img-box">
                <img src="https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2388938156.jpg" alt=""/>
              </div>
              <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
            </li>
            <li className="item"></li>
          </ul>
        </section>
      </div>
    );
  }
}

/**
 * 属性类型
 */
Discover.propTypes = {
};

Discover.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    // discover : state.discover
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // discoverAction     : bindActionCreators(discoverActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
