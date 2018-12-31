/**
 * 活动列表子项图片部分
 * @module scripts/components/ActListImg
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const ActListImg = (props) => {
    let {data, id} = props;
    return (
        <div className="p-relative">
            <Link className="item-pic" to={`/actDetail/${id}`}>
                <img src={data.imgUrl} alt="" />
            </Link>
            <div className="item-title">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
        </div>
    );
}

export default ActListImg;
/**
 * 属性类型
 */
ActListImg.propTypes = {
    data : PropTypes.object.isRequired,
    id   : PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ])
};