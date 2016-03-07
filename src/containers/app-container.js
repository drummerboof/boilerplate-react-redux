import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/app-actions';
import Greeter from '../components/greeter';

class App extends Component {

  static propTypes = {
    greet: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    generate: PropTypes.func.isRequired,
  };

  componentDidMount () {
    this.props.generate();
  }

  handleChange = () => {
    this.props.generate();
  };

  render () {
    return (
      <section>
        <Greeter name={this.props.name} onChange={this.handleChange} />
      </section>
    );
  }
}

export default connect(state => state.app, actions)(App);
