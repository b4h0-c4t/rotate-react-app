import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../assets/logo.svg';

import ConnectTest from './ConnectTest'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={ { animationDuration: this.props.state.store.tests / 10 + "s" } } />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ConnectTest />
      </div>
    );
  };
};

export default connect(
  state => ({ state })
)(App);
