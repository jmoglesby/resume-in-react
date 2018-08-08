import React, { Component } from 'react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';

class ExternalLink extends Component {
  
  render() {
    const icon = <FontAwesomeIcon icon="external-link" size="1x"/>;

    return(
      <p className="Scroller-link">
        <a href={this.props.id} target="_blank">
          SEE IT {icon}
        </a>
      </p> 
    )
  }
}

export default ExternalLink;