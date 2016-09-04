/**
 * 活动列表子项
 * @module scripts/components/ActListItem
 * @requires react
 */
'use strict';

import React from 'react';
import ActListImg from 'scripts/components/ActList/ActListImg';
import ActListDesc from 'scripts/components/ActList/ActListDesc';

export default class ActListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let imgBox    = this.props.data.imgBox,
            detailBox = this.props.data.detailBox;
        return (
            <li className="item">
                <ActListImg {...props} data={imgBox} index={this.props.index}/>
                <ActListDesc data={detailBox} index={this.props.index}/>
            </li>
        );
    }
}