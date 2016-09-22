/**
 * 活动列表子项详细部分
 * @module scripts/components/ActListDesc
 * @requires react
 */
'use strict';

import React from 'react';
import {toggleFavor} from 'scripts/actions/actionCreators';

export default class ActListDesc extends React.Component {
    constructor(props) {
        super(props);
        this.handleFavor = this.handleFavor.bind(this);
    }

    handleFavor() {
        let { dispatch } = this.props;
        dispatch(toggleFavor({index: this.props.index}));
    }

    render() {
        let data        = this.props.data,
            favorClass  = 'u-btn-border e-lightgray e-no-active ' + (data.hasfavor ? 'e-favor' : '');

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
            </div>
        );
    }
}