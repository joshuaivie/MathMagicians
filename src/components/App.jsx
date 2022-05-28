/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
