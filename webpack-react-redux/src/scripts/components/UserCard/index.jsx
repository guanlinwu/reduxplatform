/**
 * 导航条
 * @module scripts/components/UserCard
 * @requires react
 */
'use strict';

import React from 'react';
import 'scripts/components/UserCard/_userCard'

export default class UserCard extends React.Component {
    constructor(props){
        super(props);
        console.log('UserCard', props);
    }
    render() {
        let {imgUrl, name} = this.props;
        return (
            <div className="user-card">
                <img className="img" src={imgUrl} alt=""/>
                <div className="detail">
                    <p className="name">{name}</p>
                </div>
            </div>
        );
    }
}
/**
 * 默认属性
 */
UserCard.defaultProps = {
};
/**
 * 属性类型
 */
UserCard.propTypes = {
};
