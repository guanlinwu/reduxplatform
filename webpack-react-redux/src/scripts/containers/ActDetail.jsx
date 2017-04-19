/**
 * 活动详情页容器
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actdetailActionCreators from 'scripts/actions/actdetailActionCreators';
import * as sliderActionCreators from 'scripts/actions/sliderActionCreators';

import Slider from 'scripts/components/Slider/Slider';
/**
 * 智能组件
 */
class ActDetail extends Component {
  componentDidMount() {
      console.log('ActDetail', this.props);
      const {params}            = this.props,
      id                        = params.id;
      this.props.actdetailAction.fetchActDetail(id);
  }
  componentWillUnmount() {
    console.log('ActDetail componentWillUnmount');
    this.props.actdetailAction.unmountActDetail();
  }
  render() {
    const { slider } = this.props.actdetail;
    return (
        <div className="act-detail">
            {slider !== undefined && <Slider slider={slider} sliderAction={this.props.sliderAction}/>}
            <section className="m-card e-border-bottom base-info">
                <div className="price-box f-clearfix">
                    <span className="pricebox-price"><i className="pricebox-yen">¥</i><em>508</em>起</span>
                    <span className="pricebox-market">¥<del>2664</del></span>
                    <span className="pricebox-off">1.9折</span>
                </div>
                <p className="detail-pms">[自由行]直降2000！4日3晚品质游日本经典景点，超级划算，五星级温泉酒店入住</p>
            </section>
        </div>
    );
  }
}

ActDetail.propTypes = {
    params          : PropTypes.object.isRequired,
    actdetail       : PropTypes.object.isRequired,
    actdetailAction : PropTypes.object.isRequired,
    sliderAction    : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    actdetail : state.actdetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actdetailAction : bindActionCreators(actdetailActionCreators, dispatch),
    sliderAction    : bindActionCreators(sliderActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActDetail);
