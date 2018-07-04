import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

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
          <Button color="success">learning</Button>
          <Button color="info">creating</Button>
        </div>
      </div>
    );
  }
}

export default App;
