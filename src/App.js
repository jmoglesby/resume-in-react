import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleLeft, 
        faChevronCircleRight, 
        faExternalLinkAlt, 
        faExternalLinkSquareAlt 
      } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import ToggleButton from './ToggleButton/ToggleButton.js';
import Scroller from './Scroller/Scroller.js';

// Fontawesome's library helper for loading only specific icons
// into the app for use in all components
library.add(faChevronCircleLeft, faChevronCircleRight, faExternalLinkAlt, faExternalLinkSquareAlt);

class App extends Component {
  state = { activeToggle: "" }

  // When button is toggled set state activeToggle to the id of
  // toggled button, or else to blank -- this is used to display
  // the appropriate content in the Scroller
  handleToggle = (id) => {
    this.setState({ activeToggle: id === this.state.activeToggle ? "" : id });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Greeting">Hi, I'm Jeremy</h1>
          <p className="App-intro">
            <em>checkout what I've been...</em>
          </p>
        </header>
        <div className="Buttons">
          <ToggleButton id="learning" 
            onToggle={this.handleToggle} 
            toggled={this.state.activeToggle === "learning"}
          >
            learning
          </ToggleButton>
          <ToggleButton id="creating" 
            onToggle={this.handleToggle} 
            toggled={this.state.activeToggle === "creating"}
          >
            creating
          </ToggleButton>
        </div>
        <Scroller display={this.state.activeToggle}/>
      </div>
    );
  }
}

export default App;
