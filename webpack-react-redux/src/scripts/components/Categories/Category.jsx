/**
 * 种类
 * @module scripts/components/Category
 * @requires react
 */
'use strict';

import React from 'react';

export default class Category extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleSubscribe({
            index    : this.props.index,
            belongTo : this.props.belongTo
        });
    }

    render() {
        let {imgUrl, title, isSubscribe} = this.props;
        return (
            <li className="item" onClick={this.handleClick}>
              <h3 className="title">{title}</h3>
              <div className="img-box">
                <img src={imgUrl} alt=""/>
              </div>
              {isSubscribe ?
                <a className="u-btn-border e-lightgray subscribe" href="javascript:;">取消订阅</a>
                :
                <a className="u-btn-border subscribe" href="javascript:;">订阅</a>
                }
            </li>
        );
    }
}
/**
 * 默认属性
 */
Category.defaultProps = {
};
/**
 * 属性类型
 */
Category.propTypes = {
    imgUrl          : React.PropTypes.string.isRequired,
    title           : React.PropTypes.string.isRequired,
    belongTo        : React.PropTypes.string,
    toggleSubscribe : React.PropTypes.func,
    isSubscribe     : React.PropTypes.bool,
    index           : React.PropTypes.number.isRequired
};
