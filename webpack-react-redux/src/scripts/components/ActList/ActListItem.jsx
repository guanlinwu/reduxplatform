/**
 * 活动列表子项
 * @module scripts/components/ActListItem
 * @requires react
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ActListImg from 'scripts/components/ActList/ActListImg';
import ActListDesc from 'scripts/components/ActList/ActListDesc';

export default class ActListItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let {imgBox, detailBox, id} = this.props.data;
        return (
            <li className="item">
                <ActListImg data={imgBox} index={this.props.index} id={id} />
                <ActListDesc actlistAction={this.props.actlistAction} data={detailBox} index={this.props.index} />
            </li>
        );
    }
}

/**
 * 属性类型
 */
ActListItem.propTypes = {
    index         : PropTypes.number.isRequired,
    data          : PropTypes.object.isRequired,
    actlistAction : PropTypes.object.isRequired
};