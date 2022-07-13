/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  handleCalulatorInput, orangeColor, buttonContent, span,
}) {
  return (
    <button
      onClick={handleCalulatorInput}
      className={`button ${orangeColor ? 'orange' : 'grey'} ${span ? `span-${span}` : ''}`}
      type="button"
    >
      {buttonContent}
    </button>
  );
}

Button.propTypes = {
  handleCalulatorInput: PropTypes.func.isRequired,
  buttonContent: PropTypes.string.isRequired,
  orangeColor: PropTypes.bool,
  span: PropTypes.number,
};

Button.defaultProps = {
  orangeColor: false,
  span: 1,
};
