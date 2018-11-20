import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
  <div data-test="component-guessed-words">
    {!isEmpty(guessedWords) ? (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {map(guessedWords, ({ guessedWord, letterMatchCount }, key) => (
              <tr data-test="guessed-word" key={key}>
                <td>{guessedWord}</td>
                <td>{letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    )}
  </div>
);

export default GuessedWords;

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ),
};
