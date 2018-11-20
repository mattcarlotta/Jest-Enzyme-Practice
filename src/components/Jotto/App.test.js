import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, checkProps } from './tests/utils';
import { getSecretWord } from './actions';
import App, { Jotto } from './App.js';

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

const defaultProps = {
  ...initialState,
  getSecretWord,
};

describe('App component', () => {
  it('does not not throw PropType warnings', () => {
    checkProps(App, defaultProps);
  });

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

    it('has access to the `getSecretWord` action creator', () => {
      const {
        props: { getSecretWord: getSecretWordProp },
      } = wrapper.instance();

      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
  });
});

describe('Jotto class component', () => {
  it('runs `getSecretWord` on did mount', () => {
    const getSecretWordMock = jest.fn();

    // set up getSecretWordMock as a prop
    const wrapper = shallow(
      <Jotto getSecretWord={getSecretWordMock} {...initialState} />,
    );

    // run cDM
    wrapper.instance().componentDidMount();

    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});
