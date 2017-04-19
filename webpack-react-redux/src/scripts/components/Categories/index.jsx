/**
 * 种类
 * @module scripts/components/categories
 * @requires react
 */


import React from 'react';
import PropTypes from 'prop-types';
// jsx
import Category from 'scripts/components/Categories/Category';
// scss
import 'scripts/components/Categories/_categories';

export default class Categories extends React.Component {
    constructor(props){
        super(props);
        console.log('Categories', props);
    }
    render() {
        let {categories, toggleSubscribe, title, belongTo} = this.props;
        return (
            <section className="m-categories">
                <div className="title">{title}</div>
                <ul className="category">
                    {!!categories && categories.map((category, index) => <Category {...category} belongTo={belongTo} key={index} index={index} toggleSubscribe={toggleSubscribe}/>)}
                </ul>
            </section>
        );
    }
}
/**
 * 默认属性
 */
Categories.defaultProps = {
};
/**
 * 属性类型
 */
Categories.propTypes = {
    toggleSubscribe : PropTypes.func,
    categories      : PropTypes.array,
    title           : PropTypes.string,
    belongTo        : PropTypes.string
};
