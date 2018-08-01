import React, { Component } from 'react';
import learning from '../Content/LearningContent.js';
import creating from '../Content/CreatingContent.js';
import { Map } from 'core-js';

class Scroller extends Component {

  render() {
    const display = this.props.display;
    const data = new Map()
      .set('learning', learning)
      .set('creating', creating);
    const content = display === "" ? "" :
      data.get(display);

    if (content) {
      return(
        <div>
          <div>{this.props.display}</div>
          <h1>{content[0].heading}</h1>
          <p>{content[0].text}</p>
        </div>
      )
    } else {
      return (
        <div>{this.props.display}</div>
      )
    }
  };
}

export default Scroller;