'use strict';

import React from 'react';
import { Link } from 'react-router';

const PhotoGrid = React.createClass({

  render() {
    return (
      <div className="photo-grid">
        <button onClick={this.props.increment.bind(null, '5')} >PhotoGrid</button>
      </div>
    );
  }
});

export default PhotoGrid;
