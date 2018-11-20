import { storeFactory } from '../tests/utils';
import { guessWord } from '../actions';

describe('guessWord action dispatch', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess)); // dispatch guessWord with 'train'
      const newState = store.getState(); // retrieve current state
      const expectedState = {
        // expect the state to contain 'train' with 3 matching letters
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord)); // dispatch guessWord with 'party'
      const newState = store.getState(); // retrieve current state
      const expectedState = {
        // expect the state to contain 'party' with 5 matching letters and sets success to true
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };

    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess)); // dispatch guessWord with 'train'
      const newState = store.getState(); // retrieve current state
      const expectedState = {
        // expect the state to contain 'train' with 3 matching letters
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord)); // dispatch guessWord with 'party'
      const newState = store.getState(); // retrieve current state
      const expectedState = {
        // expect the state to contain 'party' with 5 matching letters and sets success to true
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
