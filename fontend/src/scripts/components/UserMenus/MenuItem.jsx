/**
 * 导航条
 * @module scripts/components/UserMenus/MenuItem
 * @requires react
 */


import React from 'react';

const MenuItem = (props)=> {
    let {content, num, iconClass} = props;
      return (
        <div>
          <a>
            <i className={"iconfont e-position-left-center " + iconClass}></i>
            <p className="item-title">{content}</p>
            {!!num && <span className="e-position-right-center">{num}</span>}
          </a>
        </div>
      );
}
export default MenuItem;

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
