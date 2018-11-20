import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessWord, getSecretWord } from '../../actions';
import { inputContainer } from './Input.scss';

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

  handleResetClick = () => this.props.getSecretWord();

  render = () =>
    !this.props.success ? (
      <form
        onSubmit={this.handleSubmit}
        data-test="component-input"
        className=""
      >
        <div className={inputContainer}>
          <input
            data-test="input-box"
            className="uk-input"
            type="text"
            placeholder="Enter Guess"
            value={this.state.value}
            onChange={this.handleChange}
            style={{ width: 500 }}
          />
        </div>
        <button
          data-test="submit-button"
          className="uk-button uk-button-primary"
          type="submit"
          style={{ marginRight: 20 }}
        >
          Submit
        </button>
      </form>
    ) : (
      <button
        data-test="reset-button"
        className="uk-button uk-button-danger"
        type="button"
        onClick={this.handleResetClick}
      >
        Reset
      </button>
    );
}

export default connect(
  state => ({
    success: state.success,
  }),
  { guessWord, getSecretWord },
)(Input);

Input.propTypes = {
  success: PropTypes.bool.isRequired,
  guessWord: PropTypes.func.isRequired,
  getSecretWord: PropTypes.func.isRequired,
};
