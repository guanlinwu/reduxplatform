'use strict';

import React from 'react';
import { Link } from 'react-router';

const Single = React.createClass({

  render() {

    return (
      <div className="single-photo">
        <Link to='/'>Single</Link>
      </div>
    );
  }
});

export default Single;
