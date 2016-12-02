/**
 * 活动详情页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import Slider from 'scripts/components/Slider/Slider';

/**
 * 智能组件
 */
class ActDetail extends Component {
  render() {
    const {params, actdetail} = this.props,
    id                        = params.id;
    let curActdetail          = actdetail[id-1];

    return (
        <div className="act-detail">
            <Slider slider={curActdetail.slider} />
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
};

// function mapStateToProps(state) {
//   return {
//     nav: state.nav,
//     actlist: state.actlist
//   };
// }

// export function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

// export default connect(mapStateToProps)(Home);
export default ActDetail;