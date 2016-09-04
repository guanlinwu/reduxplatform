/**
 * 活动列表
 * @module scripts/components/ActList
 * @requires react
 */
'use strict';

import React from 'react';
import ActListItem from 'scripts/components/actList/actListItem';

export default class ActList extends React.Component {
    constructor(props){
        super(props);
        console.log('ActList', props);
        /*
         * bind
         */
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <ul className ="m-list">
                {this.props.actlist.actOptionArr.map((actOption, index) => <ActListItem {...this.props} data={actOption} key={index} index={index}/>)};
            </ul>
        );
    }
}
/**
 * 默认属性
 */
ActList.defaultProps = {
    actlist    : {}
};
/**
 * 属性类型
 */
ActList.propTypes = {
    actlist : React.PropTypes.object.isRequired
};