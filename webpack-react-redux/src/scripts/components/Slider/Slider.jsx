/**
 * 轮播组件
 * @module scripts/components/Slider
 * @requires react
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import SliderItem from 'scripts/components/Slider/SliderItem';
import SliderTag from 'scripts/components/Slider/SliderTag';
import 'scripts/components/Slider/_slider';

export default class Slider extends Component {
    constructor(props){
        super(props);
        this.ox, this.oy, this.nx, this.ny, this.timer;

        this.swipeEnd     = this.swipeEnd.bind(this);
        this.swipeStart   = this.swipeStart.bind(this);
        this.swipeMove    = this.swipeMove.bind(this);
        this.turn         = this.turn.bind(this);
        this.autoTurn     = this.autoTurn.bind(this);
        this.stopAutoTurn = this.stopAutoTurn.bind(this);
    }
    componentDidMount() {
        console.log('Sliderprops', this.props);
        console.log(this.refs.sliderContent);
        console.log(this.refs.sliderContent.offsetWidth);
        console.log(this.props.content.length);
        this.props.sliderAction.updateBase({
            sliderCount : this.props.content.length,
            width       : this.refs.sliderContent.offsetWidth * this.props.content.length,
            slideWidth  : this.refs.sliderContent.offsetWidth
        });
        // this.autoTurn();
    }

    swipeStart(e) {
        if(this.props.slider.animating) {
            return;
        }
        console.log('swipeStart',this.props.slider.animating);
        this.ox      = e.clientX || e.changedTouches[0].clientX;
        this.oy      = e.clientY || e.changedTouches[0].clientY;
    }

    swipeMove(e) {
        if(this.props.slider.animating) {
            return;
        }
        this.nx      = e.clientX || e.changedTouches[0].clientX;

        let dx            = this.nx - this.ox,
            curTranslateX = -this.props.slider.activeIndex * this.props.slider.slideWidth,
            translateX    = curTranslateX + dx;
        console.log(translateX);
        this.props.sliderAction.updateStyle({
            WebkitTransform  :'translate3d(' + translateX +'px, 0px, 0px)',
            transform        :'translate3d(' + translateX +'px, 0px, 0px)'
        });
    }

    swipeEnd(e) {
        if(this.props.slider.animating) {
            return;
        }
        console.log('swipeEnd');

        this.nx = e.clientX || e.changedTouches[0].clientX;
        this.ny = e.clientY || e.changedTouches[0].clientY;

        let dx            = this.nx - this.ox,
            dy            = this.ny - this.oy;

        let activeIndex   = this.props.slider.activeIndex;

        if(dx*dx+dy*dy < 400) {
            this.turn(activeIndex, true);
            return;
        }
        if(dx>0) {
            console.log('swipeRight');
            activeIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
            this.turn(activeIndex, this.props.slider.activeIndex != activeIndex);
        }else {
            console.log('swipeLeft');
            activeIndex = activeIndex < this.props.slider.sliderCount - 1 ? activeIndex + 1 : activeIndex;
            this.turn(activeIndex, this.props.slider.activeIndex != activeIndex);
        }
    }

    autoTurn() {
        var self = this;
        console.log(self);
        self.timer = setInterval(function() {
            if(!self.props.slider.sliderCount) {
                return;
            }
            let activeIndex = self.props.slider.activeIndex;
            activeIndex = activeIndex < self.props.slider.sliderCount - 1 ? activeIndex + 1 : activeIndex;
            self.turn(activeIndex, self.props.slider.activeIndex != activeIndex);
        }, 4000, self);
    }

    stopAutoTurn() {
        clearInterval(this.timer);
    }

    turn(activeIndex, isAnimating) {
        let translateX = -activeIndex * this.props.slider.slideWidth;
        this.props.sliderAction.updateStyle({
            WebkitTransform  :'translate3d(' + translateX +'px, 0px, 0px)',
            WebkitTransition :'-webkit-transform 200ms ease',
            transform        :'translate3d(' + translateX +'px, 0px, 0px)',
            transition       :'transform 200ms ease'
        });
        this.props.sliderAction.updateBase({
            activeIndex     : activeIndex,
            tempactiveindex : this.props.slider.activeIndex,
            animating       : isAnimating
        });
        isAnimating && setTimeout(this.props.sliderAction.endAnimating, 200);
    }

    render() {
        let { activeIndex, trackStyle } = this.props.slider;
        return (
            <section className="m-card m-slider">
                <ul style={trackStyle} className="m-slider-content" ref="sliderContent" onTouchStart={this.swipeStart} onTouchMove={this.swipeMove} onTouchEnd={this.swipeEnd}>
                    {this.props.content.map((content, index) => <SliderItem key={index} index={index} link={content.link} img={content.img} isActive={activeIndex == index}/>)}
                </ul>
                <SliderTag activeIndex={activeIndex} length={this.props.content.length} />
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
    content : PropTypes.array.isRequired,
    slider : PropTypes.object.isRequired,
    sliderAction : PropTypes.object.isRequired
};
