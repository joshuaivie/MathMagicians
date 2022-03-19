/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleCalulatorInput = this.handleCalulatorInput.bind(this);
  }

  handleCalulatorInput(e) {
    const { handleCalulatorInput } = this.props;
    handleCalulatorInput(e);
  }

  render() {
    const { orangeColor, buttonContent, span } = this.props;
    return (
      <button
        onClick={this.handleCalulatorInput}
        className={`button ${orangeColor ? 'orange' : 'grey'} ${span ? `span-${span}` : ''}`}
        type="button"
      >
        {buttonContent}
      </button>
    );
  }
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
