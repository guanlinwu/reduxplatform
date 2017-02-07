/**
 * 导航条
 * @module scripts/components/UserMenus/Setting
 * @requires react
 */
'use strict';

import React from 'react';
import MenuItem from 'scripts/components/UserMenus/MenuItem';

export default class Setting extends React.Component {
    constructor(props){
        super(props);
        console.log('Setting', props);
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
Setting.defaultProps = {
};
/**
 * 属性类型
 */
Setting.propTypes = {
};
