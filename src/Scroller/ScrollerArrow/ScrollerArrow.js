import React, { Component } from 'react';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';

class ScrollerArrow extends Component {
  
  handleClick = () => {
    if (this.props.pageLeft) {
      this.props.pageLeft();
    }
    if (this.props.pageRight) {
      this.props.pageRight();
    }
  }

  render() {  
    if (this.props.dir === "left") {
      return(
        <FontAwesomeIcon icon="chevron-circle-left" size="10x"
          onClick={this.handleClick}
        />
      )
    } else {
      if (this.props.dir === "right") {
        return(
          <FontAwesomeIcon icon="chevron-circle-right" size="10x"
            onClick={this.handleClick}
          />
        )
      }
    }
  }
}

export default ScrollerArrow;