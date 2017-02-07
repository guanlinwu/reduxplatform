/**
 * 遮罩组件
 * @module scripts/components/Mask
 * @requires react
 */
'use strict';

import React from 'react';
import 'scripts/components/Mask/_mask'

export default class Mask extends React.Component {
    constructor(props){
        super(props);
        console.log('Mask', props);
    }
    render() {
        return (
            <div className="u-mask">
            </div>
        );
    }
}
/**
 * 默认属性
 */
Mask.defaultProps = {
};
/**
 * 属性类型
 */
Mask.propTypes = {
};
