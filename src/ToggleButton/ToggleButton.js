import React, { Component } from 'react';
import Button from '../Button/Button.js';

class ToggleButton extends Component {
  state = { toggled: false };
  
  handleClick = () => {
    this.setState({ toggled: !this.state.toggled }, () => {
      if (this.props.onToggle) {
        this.props.onToggle(this.props.id);
      }
    });
  }

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