/**
 * 导航条
 * @module scripts/components/UserMenus
 * @requires react
 */
'use strict';

import React from 'react';
import Collect from 'scripts/components/UserMenus/Collect';
import Follow from 'scripts/components/UserMenus/Follow';
import Setting from 'scripts/components/UserMenus/Setting';

export default class UserMenus extends React.Component {
    constructor(props){
        super(props);
        console.log('UserMenus', props);
    }
    render() {
        return (
            <div className="m-catalog-list">
                <Collect {...this.props.collect}/>
                <Follow {...this.props.follow}/>
                <Setting {...this.props.setting}/>
            </div>
        );
    }
}
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
