/**
 * 导航条
 * @module scripts/components/UserMenus/MenuItem
 * @requires react
 */
'use strict';

import React from 'react';

export default class MenuItem extends React.Component {
    constructor(props){
        super(props);
        console.log('MenuItem', props);
    }
    render() {
      let {content, num, iconClass} = this.props;
      return (
        <div>
          <a href="javascript:;">
            <i className={"iconfont e-position-left-center " + iconClass}></i>
            <p className="item-title">{content}</p>
            {!!num && <span className="e-position-right-center">{num}</span>}
          </a>
        </div>
      );
    }
}
/**
 * 默认属性
 */
MenuItem.defaultProps = {
};
/**
 * 属性类型
 */
MenuItem.propTypes = {
};
