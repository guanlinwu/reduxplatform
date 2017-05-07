/**
 * 导航条
 * @module scripts/components/UserMenus
 * @requires react
 */


import React from 'react';
import Collect from 'scripts/components/UserMenus/Collect';
import Follow from 'scripts/components/UserMenus/Follow';
import Setting from 'scripts/components/UserMenus/Setting';

const UserMenus = (props)=> {
    console.log('UserMenus', props);
    return (
        <div className="m-catalog-list">
            <Collect {...props.collect}/>
            <Follow {...props.follow}/>
            <Setting {...props.setting}/>
        </div>
    );
}
export default UserMenus;

/**
 * 默认属性
 */
UserMenus.defaultProps = {
};
/**
 * 属性类型
 */
UserMenus.propTypes = {
};
