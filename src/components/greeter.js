import React, { Component, PropTypes } from 'react';

export default class Greeter extends Component {

  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.onChange();
  };

  render () {
    return (
      <div className="greeter">
        <h1>
          {this.props.name
            ? `Welcome to your shiny new toy, ${this.props.name}!`
            : 'Welcome to your shiny new toy...'}
        </h1>
        <button onClick={this.handleClick}>Who?</button>
      </div>
    );
  }
}
