import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';
import { container } from './GuessedWords.scss';

const GuessedWords = ({ guessedWords }) => (
  <div data-test="component-guessed-words" className={container}>
    {!isEmpty(guessedWords) ? (
      <div data-test="guessed-words">
        <table className="uk-table uk-table-divider">
          <caption>Guessed Words</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {map(guessedWords, ({ guessedWord, letterMatchCount }, key) => (
              <tr data-test="guessed-word" key={key}>
                <td>{key + 1}</td>
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
