import React, { Component, PropTypes } from 'react';
import { constructUrl } from '../utils/RouteUtils';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
  title: PropTypes.string,
};

class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { children, className, route, title } = this.props;

    return (
      <a
        className={className}
        href={`/#/${constructUrl(route)}`}
        onClick={this.handleClick}
        title={title ? String(title) : ''}
      >
        {children}
      </a>
    );
  }
}

Link.propTypes = propTypes;

export default Link;
