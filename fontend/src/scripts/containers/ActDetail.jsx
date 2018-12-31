/**
 * 活动详情页容器
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actdetailActionCreators from 'scripts/actions/actdetailActionCreators';
import * as sliderActionCreators from 'scripts/actions/sliderActionCreators';

import 'styles/page/_actDetail.scss';

import Slider from 'scripts/components/Slider/Slider';
import NavBar from 'scripts/components/NavBar';
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
    console.log(this.props.actdetail)
    const { slider } = this.props.actdetail,
    navBarProps = {
      text: '马上预定'
    };
    console.log('slider', slider)
    return (
        <div className="act-detail">
            {slider !== undefined && <Slider slider={slider} sliderAction={this.props.sliderAction}/>}
            <section className="m-card e-border-bottom base-info">
                <div className="price-box f-clearfix">
                    <span className="pricebox-price"><i className="pricebox-yen">¥</i><em>508</em>起</span>
                    <span className="pricebox-market">¥<del>2664</del></span>
                    <span className="pricebox-off">1.9折</span>
                </div>
                <p className="detail-pms">[想休息休息]xxxxxxxxxxxxxxxx</p>
            </section>
            <section className="m-card e-border-bottom detail-info">
              <h3 className="title">活动详情</h3>
              <div className="bookinfo">
                <div className="define e-define-bookinfo">
                    <ul className="define-list">
                        <li>
                            <h3 className="define-title">咨询须知</h3>
                            <p className="define-content">为了节省您的时间，请告知客服此商品编号：123456</p>
                        </li>
                        <li className="e-order">
                            <h3 className="define-title">预订须知</h3>
                            <p className="define-content"><span className="num">1.</span>使用有效日期：2015年8月08至12月09；海鲜寿司晚宴</p>
                            <p className="define-content"><span className="num">2.</span>温馨提示：票据一经成功购买，便会立即寄送票据，请合理安排您的出行时间，以免造成不必要的损失。</p>
                        </li>
                        <li>
                            <h3 className="define-title">退改规则</h3>
                            <p className="define-content">凡是在出行前一个月内申请退改，一律不批，且不退还 相关费用。</p>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
            <NavBar {...navBarProps}/>
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
