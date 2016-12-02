/**
 * 活动列表子项图片部分
 * @module scripts/components/ActListImg
 * @requires react
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class ActListImg extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let {data, id} = this.props;
        return (
            <div className="p-relative">
                <Link className="item-pic" href="javascript:;" to={`/actDetail/${id}`}>
                    <img src={data.imgUrl} alt="" />
                </Link>
                <div className="item-title">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        );
    }
}