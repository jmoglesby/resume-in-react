import React, { Component } from 'react';
import learning from '../Content/LearningContent.js';
import creating from '../Content/CreatingContent.js';
import { Map } from 'core-js';
import ScrollerArrow from './ScrollerArrow/ScrollerArrow.js';

class Scroller extends Component {
  state = { page: 0 }
  
  pageLeft = () => {
    this.setState({ page: this.state.page -= 1 })
  }

  pageRight = () => {
    this.setState({ page: this.state.page += 1 })
  }

  render() {
    const display = this.props.display;
    const data = new Map()
      .set('learning', learning)
      .set('creating', creating);
    const content = display === "" ? "" :
      data.get(display);

    if (content) {
      return(
        <div className="Scroller-body">
          <div className="Scroll-left">
            <ScrollerArrow dir="left" onClick={this.pageLeft}/>
          </div>
          <div className="Scroller-content">
            <h1>{content[0].heading}</h1>
            <p>{content[0].text}</p>
          </div>
          <div className="Scroll-right">
            <ScrollerArrow dir="right" onClick={this.pageRight}/>
          </div>
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