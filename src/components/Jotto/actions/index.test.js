import { correctGuess } from '.';
import * as types from '../types';

describe('Actions', () => {
  describe('Correct Guess', () => {
    it('returns an action with type `CORRECT_GUESS`', () => {
      const action = correctGuess();
      expect(action).toEqual({ type: types.CORRECT_GUESS });
    });
  });
});
