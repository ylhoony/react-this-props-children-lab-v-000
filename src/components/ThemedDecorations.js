import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })

    return (
      <div>
        {childrenWithClass}
      </div>
    )
  }
}
