/**
 * 主页容器
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as discoverActionCreators from 'scripts/actions/discoverActionCreators';

import Categories from 'scripts/components/Categories';

import 'styles/page/_discover.scss';

const categoriesArr   = ['subscribe', 'recommend', 'entertainment'];
const categoriesArrCh = ['订阅', '推荐', '娱乐'];
/**
 * 智能组件
 */
class Discover extends Component {
  componentDidMount() {
    console.log('Discover', this.props);
    let {categories}  = this.props.discover;
    console.log(categories);
    if(categories == undefined) {
      for(var item in categoriesArr) {
        this.props.discoverAction.fetchCategories(categoriesArr[item]);
      }
    }
  }
  render() {
    let {categories}  = this.props.discover,
    categoryCnt       = [],
    {toggleSubscribe} = this.props.discoverAction;
    let count = 0;//记录categories的真实有效位置
    for(var key in categories){
      if(categories[key].length > 0) {
        categoryCnt.push(<Categories categories={categories[key]} key={key} belongTo={key} title={categoriesArrCh[count]} toggleSubscribe={toggleSubscribe}/>);
      }
      count++;
    }
    return (
      <div className="discover">
        {categoryCnt}
      </div>
    );
  }
}

/**
 * 属性类型
 */
Discover.propTypes = {
};

Discover.propTypes = {
  children       : PropTypes.object.isRequired,
  discover       : React.PropTypes.object.isRequired,
  discoverAction : React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    discover : state.discover
  };
}

function mapDispatchToProps(dispatch) {
  return {
    discoverAction     : bindActionCreators(discoverActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
