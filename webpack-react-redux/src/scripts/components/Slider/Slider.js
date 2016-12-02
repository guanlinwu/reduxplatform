/**
 * 轮播组件
 * @module scripts/components/Slider
 * @requires react
 */
'use strict';

import React from 'react';
import SliderItem from 'scripts/components/Slider/SliderItem';
import SliderTag from 'scripts/components/Slider/SliderTag';

export default class Slider extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }
    render() {
        const { activeIndex } = this.props.slider;
        return (
            <section className="m-card m-slider">
                <ul className="m-slider-content">
                    {this.props.slider.content.map((content, index) => <SliderItem key={index} index={index} link={content.link} img={content.img} isActive={activeIndex == index}/>)}
                </ul>
                <SliderTag activeIndex={activeIndex} length={this.props.slider.content.length} />
            </section>
        );
    }
}
/**
 * 默认属性
 */
Slider.defaultProps = {

};
/**
 * 属性类型
 */
Slider.propTypes = {
    
};
