import * as types from '../../types';

/**
 * @function successReducer
 * @param {array} state - Array of guessed words
 * @param {object} type - type of action to be reduced
 * @returns {boolean} - new success state.
 */
export default (state = false, { type }) => {
  switch (type) {
    case types.CORRECT_GUESS:
      return true;
    case types.RESET_CORRECT_GUESS:
      return false;
    default:
      return state;
  }
};
