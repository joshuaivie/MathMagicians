import React from 'react';
import Calculator from '../components/Calculator/Calculator';
import CalculatorHistory from '../components/Calculator/CalculatorHistory';

function CalculatorPage() {
  return (
    <div className="calculator-page">
      <CalculatorHistory />
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
