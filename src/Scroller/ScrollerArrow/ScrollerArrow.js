import React, { Component } from 'react';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';

class ScrollerArrow extends Component {
  
  // When clicked, runs the onClick prop on the component in Scroller
  // to change the index of content to disiplay from the data array
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {  
    if (this.props.dir === "left") {
      if (this.props.disabled) {
        return (
          <FontAwesomeIcon icon="chevron-circle-left" size="8x"
            className="Svg-disabled"
          />
        )
      } else {
          return (
            <FontAwesomeIcon icon="chevron-circle-left" size="8x"
              onClick={this.handleClick}
            />
          )
      }
    } else {
      if (this.props.dir === "right") {
        if (this.props.disabled) {
          return (
            <FontAwesomeIcon icon="chevron-circle-right" size="8x"
              className="Svg-disabled"
            />
          )
        } else {
            return (
              <FontAwesomeIcon icon="chevron-circle-right" size="8x"
                onClick={this.handleClick}
              />
            )
        }
      }
    }
  }
}

export default ScrollerArrow;