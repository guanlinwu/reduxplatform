/**
 * 轮播组件
 * @module scripts/components/SliderTag
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';

const SliderTag = (props)=> {
    const {activeIndex, length} = props;
    let emHtml = [];
    for(let index=0; index<length; index++) {
        emHtml.push(<em className={activeIndex===index ? 'active' : ''} key={index}>{index}</em>);
    }
    return (
        <div className="m-slider-control">
            {emHtml}
        </div>
    );
}
export default SliderTag;
/**
 * 默认属性
 */
SliderTag.defaultProps = {

};
/**
 * 属性类型
 */
SliderTag.propTypes = {
    activeIndex : PropTypes.number.isRequired,
    length : PropTypes.number.isRequired
};
