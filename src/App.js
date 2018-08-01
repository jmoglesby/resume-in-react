import React, { Component } from 'react';
import './App.css';
import ToggleButton from './ToggleButton/ToggleButton.js';
import Scroller from './Scroller/Scroller.js';

class App extends Component {
  state = { activeToggle: "" }

  handleToggle = (id) => {
    this.setState({ activeToggle: id === this.state.activeToggle ? "" : id });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Greeting">Hi, I'm Jeremy</h1>
          <p className="App-intro">
            checkout what I've been
          </p>
        </header>
        <div>
          <ToggleButton id="learning" 
            onToggle={this.handleToggle} 
            toggled={this.state.activeToggle === "learning"}
          >learning</ToggleButton>
          <ToggleButton id="creating" 
            onToggle={this.handleToggle} 
            toggled={this.state.activeToggle === "creating"}
          >creating</ToggleButton>
        </div>
        <Scroller display={this.state.activeToggle}/>
      </div>
    );
  }
}

export default App;
