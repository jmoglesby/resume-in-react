import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Greeting">Hi, I'm Jeremy</h1>
        </header>
        <p className="App-intro">
          checkout what I've been:
        </p>
        <div>
          <Button learning>learning</Button>
          <Button creating>creating</Button>
        </div>
      </div>
    );
  }
}

export default App;
