import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Input from './components/Input/Input';
import { getSecretWord } from './actions';

class Jotto extends PureComponent {
  render = () => (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={this.props.success} />
      <Input />
      <GuessedWords guessedWords={this.props.guessedWords} />
    </div>
  );
}

export default connect(
  state => ({
    guessedWords: state.guessedWords,
    secretWord: state.secretWord,
    success: state.success,
  }),
  { getSecretWord },
)(Jotto);

Jotto.propTypes = {
  getSecretWord: PropTypes.func.isRequired,
  guessedWords: PropTypes.shape({
    guessedWord: PropTypes.string,
    letterMatchCount: PropTypes.number,
  }),
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};
