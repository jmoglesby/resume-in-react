import React, { Component } from 'react';
import styled from 'styled-components';
import learning from '../Content/LearningContent.js';
import creating from '../Content/CreatingContent.js';
import { Map } from 'core-js';
import ScrollerArrow from './ScrollerArrow/ScrollerArrow.js';
import ExternalLink from './ExternalLink.js';

// Styled div for content in Scroller-body
const ContentContainer = styled.div`
  align-self: center;
  justify-self: center;
  overflow-y: scroll;
  border-radius: 5px;
  background-color: hsla(360, 0%, 100%, 0.15);
  max-width: 600px;
  max-height: 400px;
  padding: 20px;
`;

class Scroller extends Component {
  state = { index: 0 }
  
  // Changes index -1 when left arrow clicked
  indexLeft = () => {
    this.setState({ index: this.state.index -= 1 })
    this.resetScroll();
  }

  // Changes index +1 when right arrow clicked
  indexRight = () => {
    this.setState({ index: this.state.index += 1 })
    this.resetScroll();
  }

  

  // Reset the scroll position of the div showing main content
  resetScroll = () => {
    const contentDiv = document.getElementById('content-div');
    contentDiv.scrollTop = 0;
  }

  // Ensures that if the Scroller being displayed changes
  // (learning --> creating & versa) the index resets to 0
  componentWillReceiveProps(nextProps) {
    if (nextProps.display !== this.state.display) {
      this.setState({ index: 0 });
    }
  }

  render() {
    const display = this.props.display;
    // Puts content arrays into map for easy retrieval with .get()
    const data = new Map()
      .set('learning', learning)
      .set('creating', creating);
    // Get the content from the map that matches the display
    // prop of this component in the app
    const content = display === "" ? "" :
      data.get(display);
    // Sets the state of the left/right arrow buttons to enable
    // graying them out when the start or end of the content index is reached
    const left_arrow_state = this.state.index <= 0 ? true : false
    const right_arrow_state = this.state.index >= content.length - 1 ? true : false

    // If there is no content, return no nodes
    if (content) {
      return(
        <div className="Scroller-body">
          <div className="Scroll-left">
            <ScrollerArrow dir="left" disabled={left_arrow_state} onClick={this.indexLeft}/>
          </div>
          <div className="Scroller-content">
            <ContentContainer id="content-div">
              <h1 className="Scroller-heading">{content[this.state.index].heading}</h1>
              { content[this.state.index].url ? 
                  <ExternalLink id={content[this.state.index].url}/>
                  : <div/> 
              }
              <img src={content[this.state.index].img}/>
              <p className="Scroller-text">{content[this.state.index].text}</p>
            </ContentContainer>
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