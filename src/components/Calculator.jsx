import React, { useState, useEffect } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.scss';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [calculatorObject, setCalculatorObject] = useState({});

  const handleCalulatorInput = (event) => {
    const input = event.target.innerText;
    setCalculatorObject(calculate(calculatorObject, input));
  };

  useEffect(() => {
    const display = `${calculatorObject?.total || ''} ${calculatorObject?.operation || ''} ${calculatorObject?.next || ''}`.trim();
    setDisplay(display);
  }, [calculatorObject]);

  return (
    <div className="calculator">
      <Display display={display} />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="AC" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="+/-" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="%" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="÷" orangeColor />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="7" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="8" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="9" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="x" orangeColor />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="4" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="5" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="6" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="-" orangeColor />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="1" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="2" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="3" />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="+" orangeColor />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="0" span={2} />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="." />
      <Button handleCalulatorInput={handleCalulatorInput} buttonContent="=" orangeColor />
    </div>
  );
}
