/**
 * 活动列表子项详细部分
 * @module scripts/components/ActListDesc
 * @requires react
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class ActListDesc extends Component {
    constructor(props) {
        super(props);
        this.handleFavor = this.handleFavor.bind(this);
    }

    handleFavor() {
        this.props.actlistAction.toggleFavor({index: this.props.index});
    }

    render() {
        let {data}        = this.props,
            {category}    = data,
            favorClass    = 'u-btn-border e-lightgray e-no-active ' + (data.hasfavor ? 'e-favor' : '');

        return (
            <div className="detail">
                <p className="place-box">
                    {data.place}
                </p>
                <p className="notice-box">
                    <span className="u-btn-border e-lightgray">{data.time}</span>
                    <a className={favorClass} onClick={this.handleFavor}>{data.favor}人收藏</a>
                    <span className="u-btn-border e-lightgray f-fr">¥{data.price}</span>
                </p>
                <p className="subscribe">
                    <span>{category}</span>
                    <span className="time f-fr">20分钟前</span>
                </p>
            </div>
        );
    }
}

/**
 * 属性类型
 */
ActListDesc.propTypes = {
    index         : PropTypes.number.isRequired,
    data          : PropTypes.object.isRequired,
    actlistAction : PropTypes.object.isRequired
};