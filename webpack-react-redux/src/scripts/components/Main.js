/**
 * 主组件，顶层组件
 */
'use strict';

import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
          <div>
            <h1>
              <Link to='/view/123'>Main</Link>
            </h1>
            { React.cloneElement(this.props.children, this.props) }
          </div>
        );
    }
});

export default Main;
