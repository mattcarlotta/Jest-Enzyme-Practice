import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, checkProps } from './tests/utils';
import { getSecretWord } from './actions';
import ConnectedJotto, { Jotto } from './App.js';

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} defaultProps - initial defaultProps for component
 * @returns {ShallowWrapper}
 */
const setup = (defaultProps = {}) => {
  const store = storeFactory(defaultProps);
  const wrapper = shallow(<ConnectedJotto store={store} />).dive();
  return wrapper;
};

const initialReduxState = {
  secretWord: 'party',
  guessedWords: [],
  success: false,
};

const defaultProps = {
  ...initialReduxState,
  getSecretWord,
};

describe('Connected Jotto component', () => {
  it('does not not throw PropType warnings', () =>
    checkProps(ConnectedJotto, defaultProps));

  describe('redux properties', () => {
    let wrapper;
    beforeEach(() => (wrapper = setup(initialReduxState))); // set up ConnectedJotto with initialReduxState

    it('has access to the `success` redux state', () => {
      const updatedState = { ...initialReduxState, success: true }; // add new state
      wrapper = setup(updatedState); // update ConnectedJotto with new state

      const {
        props: { success: successProp },
      } = wrapper.instance(); // deconstruct success prop as successProp

      expect(successProp).toBe(updatedState.success); // expect the prop to match the updated state
    });

    it('has access to the `secretWord` redux state', () => {
      const {
        props: { secretWord: secretWordProp },
      } = wrapper.instance(); // deconstruct secretWord prop as secretWordProp

      expect(secretWordProp).toBe(initialReduxState.secretWord); // expect the prop to match the initial state
    });

    it('has access to the `guessedWords` redux state', () => {
      // add new state
      const updatedState = {
        ...initialReduxState,
        guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
      };

      wrapper = setup(updatedState); // update ConnectedJotto with new state

      const {
        props: { guessedWords: guessedWordsProp },
      } = wrapper.instance(); // deconstruct guessedWords prop as guessedWordsProp

      expect(guessedWordsProp).toBe(updatedState.guessedWords); // expect the prop to match the updated state
    });

    it('has access to the `getSecretWord` action creator', () => {
      const {
        props: { getSecretWord: getSecretWordProp },
      } = wrapper.instance(); // deconstruct getSecretWord prop as getSecretWordProp

      expect(getSecretWordProp).toBeInstanceOf(Function); // expect the prop to be a function
    });
  });
});

describe('Jotto class component', () => {
  it('runs `getSecretWord` on did mount', () => {
    const getSecretWordMock = jest.fn(); // mock getSecretWord action creator

    // set up getSecretWordMock as a prop
    const wrapper = shallow(
      <Jotto getSecretWord={getSecretWordMock} {...initialReduxState} />,
    );

    // run cDM
    wrapper.instance().componentDidMount();

    const getSecretWordCallCount = getSecretWordMock.mock.calls.length; // retrieve the getSecretWord mock called length
    expect(getSecretWordCallCount).toBe(1);
  });
});
