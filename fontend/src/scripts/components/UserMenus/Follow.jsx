/**
 * 导航条
 * @module scripts/components/UserMenus/Follow
 * @requires react
 */


import React from 'react';
import MenuItem from 'scripts/components/UserMenus/MenuItem';

const Follow = (props)=> {
    console.log('Follow', props);
    return (
        <MenuItem {...props} />
    );
}
export default Follow;

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
