/**
 * 导航条
 * @module scripts/components/UserCard
 * @requires react
 */


import React from 'react';
import 'scripts/components/UserCard/_userCard'

const UserCard = (props)=> {
    let {imgUrl, name} = props;
    return (
        <div className="user-card">
            <img className="img" src={imgUrl} alt=""/>
            <div className="detail">
                <p className="name">{name}</p>
            </div>
        </div>
    );
}
export default UserCard;
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
