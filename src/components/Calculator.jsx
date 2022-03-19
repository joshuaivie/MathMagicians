import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
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
        <Display display={display} />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="AC" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="+/-" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="%" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="÷" orangeColor />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="7" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="8" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="9" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="x" orangeColor />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="4" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="5" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="6" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="-" orangeColor />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="1" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="2" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="3" />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="+" orangeColor />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="0" span={2} />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="." />
        <Button handleCalulatorInput={this.handleCalulatorInput} buttonContent="=" orangeColor />
      </div>
    );
  }
}
