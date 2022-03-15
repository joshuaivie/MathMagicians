/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.scss';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <input className="display span-4" id="display" type="text" />
        <button className="button grey" id="clear-screen" type="button">AC</button>
        <button className="button grey" id="polarity-operator" type="button">+/-</button>
        <button className="button grey" id="modulus-operator" type="button">%</button>
        <button className="button orange" id="division-operator" type="button">÷</button>
        <button className="button grey" id="number-7" type="button">7</button>
        <button className="button grey" id="number-8" type="button">8</button>
        <button className="button grey" id="number-9" type="button">9</button>
        <button className="button orange" id="multiplication-operator" type="button">x</button>
        <button className="button grey" id="number-4" type="button">4</button>
        <button className="button grey" id="number-5" type="button">5</button>
        <button className="button grey" id="number-6" type="button">6</button>
        <button className="button orange" id="suubtraction-operator" type="button">-</button>
        <button className="button grey" id="number-1" type="button">1</button>
        <button className="button grey" id="number-2" type="button">2</button>
        <button className="button grey" id="number-3" type="button">3</button>
        <button className="button orange" id="addition-operator" type="button">+</button>
        <button className="button grey span-2" id="number-0" type="button">0</button>
        <button className="button grey" id="decimal" type="button">.</button>
        <button className="button orange" id="equality-operator" type="button">=</button>
      </div>
    );
  }
}
