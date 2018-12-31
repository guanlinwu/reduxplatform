/**
 * 导航条
 * @module scripts/components/UserMenus/Collect
 * @requires react
 */


import React from 'react';
import MenuItem from 'scripts/components/UserMenus/MenuItem';

const Collect = (props)=> {
    console.log('Collect', props);
    return (
        <MenuItem {...props} />
    );
}
export default Collect;
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
