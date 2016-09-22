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
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        let { dispatch } = this.props;
        return (
            <div className="actList">
                <ul className ="m-list">
                    {this.props.actlist && this.props.actlist.length > 0 && this.props.actlist.map((actOption, index) => <ActListItem dispatch={this.props.dispatch} data={actOption} key={index} index={index}/>)};
                </ul>
            </div>
        );
    }
}
/**
 * 默认属性
 */
ActList.defaultProps = {
    actlist    : []
};
/**
 * 属性类型
 */
ActList.propTypes = {
    actlist : React.PropTypes.array.isRequired
};