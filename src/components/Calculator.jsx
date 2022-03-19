/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.scss';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObject: {},
      display: '',
    };
    this.handleCalulatorInput = this.handleCalulatorInput.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  handleCalulatorInput = (event) => {
    const input = event.target.innerText;
    this.setState(
      (previousState) => ({
        ...previousState,
        calculatorObject: calculate(previousState.calculatorObject, input),
      }),
      () => {
        this.updateDisplay();
      },
    );
  };

  updateDisplay = () => {
    this.setState((previousState) => ({
      ...previousState,
      display: `${previousState.calculatorObject?.total || ''} ${previousState.calculatorObject?.operation || ''} ${previousState.calculatorObject?.next || ''}`.trim(),
    }));
  };

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div
          className="display span-4"
          id="display"
          type="text"
          disabled
        >
          {display || '0'}
        </div>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          AC
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          id="polarity-operator"
          type="button"
        >
          +/-
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          id="modulus-operator"
          type="button"
        >
          %
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button orange"
          id="division-operator"
          type="button"
        >
          ÷
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          7
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          8
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          9
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button orange"
          id="multiplication-operator"
          type="button"
        >
          x
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          4
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          5
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          6
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button orange"
          id="suubtraction-operator"
          type="button"
        >
          -
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          1
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          2
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          type="button"
        >
          3
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button orange"
          id="addition-operator"
          type="button"
        >
          +
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey span-2"
          id="number-0"
          type="button"
        >
          0
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button grey"
          id="decimal"
          type="button"
        >
          .
        </button>
        <button
          onClick={this.handleCalulatorInput}
          className="button orange"
          id="equality-operator"
          type="button"
        >
          =
        </button>
      </div>
    );
  }
}
