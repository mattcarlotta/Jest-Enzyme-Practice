import * as types from '../../types';

/**
 * @function guessedWordReducer
 * @param {array} state - array of guessed words.
 * @param {object} action - type and payload to be reduced.
 * @returns {array} - new guessedWords state.
 */
export default (state = [], { type, payload }) => {
  switch (type) {
    case types.GUESS_WORD:
      return [...state, payload];
    case types.RESET_GUESSED_WORDS:
      return [];
    default:
      return state;
  }
};
