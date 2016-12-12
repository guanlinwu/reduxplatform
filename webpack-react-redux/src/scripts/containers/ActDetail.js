/**
 * 活动详情页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sliderActionCreators from 'scripts/actions/sliderActionCreators';
import * as actlistActionCreators from 'scripts/actions/actlistActionCreators';

import Slider from 'scripts/components/Slider/Slider';
import Actlist from 'scripts/components/Actlist/Actlist';
/**
 * 智能组件
 */
class ActDetail extends Component {
  render() {
    const {params, actdetail, slider} = this.props,
    id                        = params.id;
    let curActdetail          = actdetail[id-1];

    return (
        <div className="act-detail">
            <Slider content={curActdetail.slider.content} slider={slider} sliderAction={this.props.sliderAction}/>
            <section className="m-card e-border-bottom base-info">
                <div className="price-box f-clearfix">
                    <span className="pricebox-price"><i className="pricebox-yen">¥</i><em>508</em>起</span>
                    <span className="pricebox-market">¥<del>2664</del></span>
                    <span className="pricebox-off">1.9折</span>
                </div>
                <p className="detail-pms">[自由行]直降2000！4日3晚品质游日本经典景点，超级划算，五星级温泉酒店入住</p>
            </section>
            <Actlist {...this.props} />
        </div>
    );
  }
}

ActDetail.propTypes = {
    params       : PropTypes.object.isRequired,
    actdetail    : PropTypes.array.isRequired,
    slider       : PropTypes.object.isRequired,
    sliderAction : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    actdetail : state.actdetail,
    slider    : state.slider,
    actlist : state.actlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sliderAction : bindActionCreators(sliderActionCreators, dispatch),
    actlistAction : bindActionCreators(actlistActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActDetail);
