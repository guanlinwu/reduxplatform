/**
 * 轮播组件
 * @module scripts/components/SliderItem
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';

const SliderItem = (props)=> {
    const {link, img} = props;
    return (
        <li>
            <a href={link}>
                <img src={img} alt="" />
            </a>
        </li>
    );
}
export default SliderItem;
/**
 * 默认属性
 */
SliderItem.defaultProps = {

};
/**
 * 属性类型
 */
SliderItem.propTypes = {
    link : PropTypes.string,
    img : PropTypes.string
};
