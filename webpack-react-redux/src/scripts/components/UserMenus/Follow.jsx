/**
 * 导航条
 * @module scripts/components/UserMenus/Follow
 * @requires react
 */
'use strict';

import React from 'react';
import MenuItem from 'scripts/components/UserMenus/MenuItem';

export default class Follow extends React.Component {
    constructor(props){
        super(props);
        console.log('Follow', props);
    }
    render() {
      return (
        <MenuItem {...this.props} />
      );
    }
}
/**
 * 默认属性
 */
Follow.defaultProps = {
};
/**
 * 属性类型
 */
Follow.propTypes = {
};
