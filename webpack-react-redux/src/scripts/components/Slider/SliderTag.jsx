/**
 * 轮播组件
 * @module scripts/components/SliderTag
 * @requires react
 */
'use strict';

import React from 'react';

export default class SliderTag extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }
    render() {
        const {activeIndex, length} = this.props;
        let emHtml = [];
        for(let index=0; index<length; index++) {
            emHtml.push(<em className={activeIndex==index ? 'active' : ''} key={index}>{index}</em>);
        }
        return (
            <div className="m-slider-control">
                {emHtml}
            </div>
        );
    }
}
/**
 * 默认属性
 */
SliderTag.defaultProps = {

};
/**
 * 属性类型
 */
SliderTag.propTypes = {
    activeIndex : React.PropTypes.number.isRequired,
    length : React.PropTypes.number.isRequired
};
