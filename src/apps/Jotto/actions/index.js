import * as types from '../types';
import { getLetterMatchCount, fetchSecretWord } from '../helpers';

/**
 * @function guessWord
 * @param {string} gussedWord - Guessed word.
 * @returns {dispatch} - with guessed word and conditional correct guess.
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

/**
 * @function getSecretWord
 * @returns {dispatch} - with res.data.
 */
export const getSecretWord = () => async dispatch => {
  try {
    const res = await fetchSecretWord();

    dispatch({
      type: types.SET_SECRET_WORD,
      payload: res.data,
    });

    dispatch({ type: types.RESET_CORRECT_GUESS });

    dispatch({ type: types.RESET_GUESSED_WORDS });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
