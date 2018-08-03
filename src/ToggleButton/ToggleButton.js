import React, { Component } from 'react';
import Button from '../Button/Button.js';

class ToggleButton extends Component {
  state = { toggled: false };
  
  // When clicked, change the state of the button component,
  // but also run the onToggle prop on the component in App
  // so that App's state changes to match
  handleClick = () => {
    this.setState({ toggled: !this.state.toggled }, () => {
      if (this.props.onToggle) {
        this.props.onToggle(this.props.id);
      }
    });
  }

  // Check's the state of the each button with the
  // state of App to enforce consistency and mutual exclusivity
  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.state.toggled) {
      this.setState({ toggled: nextProps.toggled });
    }
  }

  render() {
    return(
      <Button 
        id={this.props.id} 
        onClick={this.handleClick}
        toggled={this.state.toggled}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default ToggleButton;