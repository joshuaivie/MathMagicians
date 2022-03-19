/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ display }) {
  return (
    <div
      className="display span-4"
      id="display"
      type="text"
      disabled
    >
      {display || '0'}
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.string.isRequired,
};
