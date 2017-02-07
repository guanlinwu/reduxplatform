/**
 * 导航条
 * @module scripts/components/UserMenus/Collect
 * @requires react
 */
'use strict';

import React from 'react';
import MenuItem from 'scripts/components/UserMenus/MenuItem';

export default class Collect extends React.Component {
    constructor(props){
        super(props);
        console.log('Collect', props);
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
Collect.defaultProps = {
};
/**
 * 属性类型
 */
Collect.propTypes = {
};
