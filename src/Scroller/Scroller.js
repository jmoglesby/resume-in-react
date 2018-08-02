import React, { Component } from 'react';
import learning from '../Content/LearningContent.js';
import creating from '../Content/CreatingContent.js';
import { Map } from 'core-js';
import ScrollerArrow from './ScrollerArrow/ScrollerArrow.js';

class Scroller extends Component {
  state = { 
    index: 0,
    display: this.props.display
   }
  
  indexLeft = () => {
    this.setState({ index: this.state.index -= 1 })
  }

  indexRight = () => {
    this.setState({ index: this.state.index += 1 })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.display !== this.state.display) {
      this.setState({ index: 0 });
    }
  }

  render() {
    const display = this.props.display;
    const data = new Map()
      .set('learning', learning)
      .set('creating', creating);
    const content = display === "" ? "" :
      data.get(display);
    const left_arrow_state = this.state.index <= 0 ? true : false
    const right_arrow_state = this.state.index >= content.length - 1 ? true : false

    if (content) {
      return(
        <div className="Scroller-body">
          <div className="Scroll-left">
            <ScrollerArrow dir="left" disabled={left_arrow_state} onClick={this.indexLeft}/>
          </div>
          <div className="Scroller-content">
            <h1>{content[this.state.index].heading}</h1>
            <p>{content[this.state.index].text}</p>
          </div>
          <div className="Scroll-right">
            <ScrollerArrow dir="right" disabled={right_arrow_state} onClick={this.indexRight}/>
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  };
}

export default Scroller;