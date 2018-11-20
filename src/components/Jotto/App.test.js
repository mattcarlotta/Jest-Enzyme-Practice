import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from './tests/utils';
import App from './App.js';

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} initialState - initial state for component
 * @returns {ShallowWrapper}
 */

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

const initialState = {
  secretWord: 'party',
  guessedWords: [],
  success: false,
};

describe('Jotto App component', () => {
  describe('redux properties', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(initialState);
    });

    it('has access to the `success` redux state', () => {
      const updatedState = { ...initialState, success: true };
      wrapper = setup(updatedState);
      const {
        props: { success: successProp },
      } = wrapper.instance();

      expect(successProp).toBe(updatedState.success);
    });

    it('has access to the `secretWord` redux state', () => {
      const {
        props: { secretWord: secretWordProp },
      } = wrapper.instance();

      expect(secretWordProp).toBe(initialState.secretWord);
    });

    it('has access to the `guessedWords` redux state', () => {
      const updatedState = {
        ...initialState,
        guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
      };
      wrapper = setup(updatedState);
      const {
        props: { guessedWords: guessedWordsProp },
      } = wrapper.instance();

      expect(guessedWordsProp).toBe(updatedState.guessedWords);
    });

    it('has access to the `getSecretWord` action creator and is a function', () => {
      const {
        props: { getSecretWord: getSecretWordProp },
      } = wrapper.instance();

      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
  });
});
