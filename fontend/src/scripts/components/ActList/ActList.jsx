/**
 * 活动列表
 * @module scripts/components/ActList
 * @requires react
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ActListItem from 'scripts/components/ActList/ActListItem';
import 'scripts/components/ActList/_actList';

export default class ActList extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        console.log('ActList', this.props);
        /*
         如果是刚开始加载，即当前页为0时
         */
        this.props.actlist.pageNum === 0 && this.props.actlistAction.fetchActList();
    }

    render() {
        return (
            <div className="actList">
                <ul className="m-list">
                    {this.props.actlist && this.props.actlist.listArr && this.props.actlist.listArr.length > 0 && this.props.actlist.listArr.map((actOption, index) => <ActListItem data={actOption} key={index} index={index} actlistAction={this.props.actlistAction}/>)}
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
    actlist       : PropTypes.object.isRequired,
    actlistAction : PropTypes.object.isRequired
};