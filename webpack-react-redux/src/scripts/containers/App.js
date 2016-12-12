/**
 * 总容器
 */
'use strict';

import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div className="g-wrapper">
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;