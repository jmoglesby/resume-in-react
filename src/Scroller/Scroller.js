import React, { Component } from 'react';
import learning from '../Content/LearningContent.js';
import creating from '../Content/CreatingContent.js';
import { Map } from 'core-js';

class Scroller extends Component {
  state = { 
    display: this.props.display,
    content: []
  }

  render() {
    const display = this.props.display;
    const data = new Map()
      .set('learning', learning)
      .set('creating', creating);

    this.state.content = data.get(display);

    if (this.state.content) {
      return(
        <div>
          <div>{this.props.display}</div>
          <h1>{this.state.content.heading}</h1>
          <p>{this.state.content.text}</p>
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