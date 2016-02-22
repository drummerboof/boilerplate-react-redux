import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/app-actions'
import Greeter from '../components/greeter'

class App extends Component {

  static propTypes = {
    greet: PropTypes.func.isRequired,
    generate: PropTypes.func.isRequired
  };

  componentDidMount () {
    this.props.generate()
  }

  render() {
    return (
      <section>
        <Greeter name={this.props.name} onChange={this.props.generate} />
      </section>
    );
  }
}

export default connect(state => state.app, actions)(App);
