/**
 * 种类
 * @module scripts/components/Category
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';

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
                <a className="u-btn-border e-lightgray subscribe">取消订阅</a>
                :
                <a className="u-btn-border subscribe">订阅</a>
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
    imgUrl          : PropTypes.string.isRequired,
    title           : PropTypes.string.isRequired,
    belongTo        : PropTypes.string,
    toggleSubscribe : PropTypes.func,
    isSubscribe     : PropTypes.bool,
    index           : PropTypes.number.isRequired
};
