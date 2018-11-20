import axios from 'axios';
import * as types from '../types';
import { getLetterMatchCount } from '../helpers';

/**
 * @function guessWord
 * @param {string} gussedWord - Guessed word.
 * @returns {dispatch} - thunk actions.
 */
export const guessWord = guessedWord => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: types.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  if (guessedWord === secretWord) dispatch({ type: types.CORRECT_GUESS });
};

export const getSecretWord = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000');
    dispatch({
      type: types.SET_SECRET_WORD,
      payload: res.data,
    });
  } catch (e) {
    console.log(e); /* eslint-disable-line no-console-error */
  }
};
