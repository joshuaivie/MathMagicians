/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  render() {
    const { display } = this.props;
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
}

Display.propTypes = {
  display: PropTypes.string.isRequired,
};
