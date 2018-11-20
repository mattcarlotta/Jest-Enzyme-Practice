import * as types from '../../types';

/**
 * @function secretWordReducer
 * @param {string} state - array of guessed words.
 * @param {object} action - type and payload to be reduced.
 * @returns {string} - new guessedWords state.
 */
export default (state = '', { type, payload }) => {
  switch (type) {
    case types.SET_SECRET_WORD:
      return payload;
    default:
      return state;
  }
};
