import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

export default class Greeter extends Component {

  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="greeter">
        <h1>
          {this.props.name
            ? `Welcome to your shiny new toy, ${this.props.name}!`
            : 'Welcome to your shiny new toy...'}
        </h1>
        <button onClick={e => this.props.onChange()}>Who?</button>
      </div>
    );
  }
}
