import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from '../store/types';
import boundActionCreator from '../boundActionCreator';

class ConnectTest extends Component {
  constructor(props) {
    super(props);
  }

  additionState(num) {
    boundActionCreator(types.TEST, { num });
  }

  render() {
    return (
      <div className="ConnectTest">
        <p>Rotate Speed: { this.props.state.store.tests }</p>
        <button onClick={ () => { this.additionState(1); } }>+</button>
        <button onClick={ () => { this.additionState(-1); } }>-</button>
      </div>
    );
  };
};

export default connect(
  state => ({ state })
)(ConnectTest);
