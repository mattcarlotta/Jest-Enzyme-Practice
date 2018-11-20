import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class Input extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (!value) return;
    this.setState({ value: '' }, () => {
      this.props.guessWord(value);
    });
  };

  render = () =>
    !this.props.success ? (
      <form
        onSubmit={this.handleSubmit}
        data-test="component-input"
        className=""
      >
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter Guess"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    ) : null;
}

export default connect(
  state => ({
    success: state.success,
  }),
  { guessWord },
)(Input);

Input.propTypes = {
  success: PropTypes.bool.isRequired,
  guessWord: PropTypes.func.isRequired,
};
