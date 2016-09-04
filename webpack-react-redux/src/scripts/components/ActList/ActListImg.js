/**
 * 活动列表子项图片部分
 * @module scripts/components/ActListImg
 * @requires react
 */
'use strict';

import React from 'react';

export default class ActListImg extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <div className="p-relative">
                <a className="item-pic" href="javascript:;">
                    <img src={data.imgUrl} alt="" />
                </a>
                <div className="item-title">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        );
    }
}