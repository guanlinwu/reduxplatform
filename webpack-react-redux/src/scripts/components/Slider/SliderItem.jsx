/**
 * 轮播组件
 * @module scripts/components/SliderItem
 * @requires react
 */
'use strict';

import React from 'react';

export default class SliderItem extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }
    render() {
        const {link, img} = this.props;
        return (
            <li>
                <a href={link}>
                    <img src={img} alt="" />
                </a>
            </li>
        );
    }
}
/**
 * 默认属性
 */
SliderItem.defaultProps = {

};
/**
 * 属性类型
 */
SliderItem.propTypes = {
    link : React.PropTypes.string,
    img : React.PropTypes.string
};
