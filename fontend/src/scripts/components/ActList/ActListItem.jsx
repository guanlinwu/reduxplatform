/**
 * 活动列表子项
 * @module scripts/components/ActListItem
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';
import ActListImg from 'scripts/components/ActList/ActListImg';
import ActListDesc from 'scripts/components/ActList/ActListDesc';

const ActListItem = (props) => {
    let {imgBox, detailBox, id} = props.data;
    return (
        <li className="item">
            <ActListImg data={imgBox} index={props.index} id={id} />
            <ActListDesc actlistAction={props.actlistAction} data={detailBox} index={props.index} />
        </li>
    );
}

export default ActListItem;

/**
 * 属性类型
 */
ActListItem.propTypes = {
    index         : PropTypes.number.isRequired,
    data          : PropTypes.object.isRequired,
    actlistAction : PropTypes.object.isRequired
};