/**
 * 导航条
 * @module scripts/components/UserMenus/Setting
 * @requires react
 */


import React from 'react';
import MenuItem from 'scripts/components/UserMenus/MenuItem';

const Setting = (props)=> {
    console.log('Setting', props);
    return (
        <MenuItem {...props} />
    );
}
export default Setting;

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
