import React from 'react';
import { shallow } from 'enzyme';
import { setup, storeFactory, findByTestAttr } from '../../tests/utils';
import ConnectedInput, { Input } from './Input.js';

/**
 * Factory function to create a ShallowWrapper for the ConnectedInput component
 * @function setupConnectedInput
 * @param {object} initialState - initial state for component
 * @returns {ShallowWrapper}
 */
const setupConnectedInput = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedInput store={store} />).dive();
  return wrapper;
};

describe('ConnectedInput component', () => {
  let wrapper;
  let initialState = { success: false };
  beforeEach(() => {
    wrapper = setupConnectedInput(initialState);
  });

  describe('Word has not been guessed', () => {
    it('renders without errors', () => {
      const componentInput = findByTestAttr(wrapper, 'component-input');
      expect(componentInput).toHaveLength(1);
    });

    it('renders an input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox).toHaveLength(1);
    });

    it('renders a submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton).toHaveLength(1);
    });
  });

  describe('Word has been guessed', () => {
    beforeEach(() => {
      initialState = { success: true };
      wrapper = setupConnectedInput(initialState);
    });

    it('renders reset button if `success` is true', () => {
      const resetButton = findByTestAttr(wrapper, 'reset-button');
      expect(resetButton).toHaveLength(1);
    });
  });

  describe('Redux props', () => {
    beforeEach(() => {
      initialState = { success: true };
      wrapper = setupConnectedInput(initialState);
    });

    it('has success state as prop', () => {
      const {
        props: { success: successProp },
      } = wrapper.instance();

      expect(successProp).toBe(initialState.success);
    });

    it('`guessWord` action creator is a function', () => {
      const {
        props: { guessWord: guessWordActionProp },
      } = wrapper.instance();

      expect(guessWordActionProp).toBeInstanceOf(Function);
    });

    it('`getSecretWord` action creator is a function', () => {
      const {
        props: { getSecretWord: getSecretWordProp },
      } = wrapper.instance();

      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
  });
});

describe('Input component', () => {
  const initialState = { value: 'train' }; // initial component state
  const guessWordMock = jest.fn(); // mock guessWord action creator
  const getSecretWordMock = jest.fn(); // mock getSecretWord action creator
  const defaultProps = {
    success: false,
    guessWord: guessWordMock,
    getSecretWord: getSecretWordMock,
  }; // default component props
  const fakeEvent = { preventDefault: () => null }; // intercept event function in handleSubmit

  let wrapper;
  let componentInput;
  let getInputBox;
  beforeEach(() => {
    wrapper = setup(Input, defaultProps, initialState); // initialize component with defaultProps and initialState
    componentInput = findByTestAttr(wrapper, 'component-input'); // get form element
    getInputBox = () => findByTestAttr(wrapper, 'input-box').prop('value'); // get input element's prop value
  });

  it('contains the correct input value supplied by state', () => {
    const inputBox = getInputBox(); // get current input DOM element value
    expect(inputBox).toBe(initialState.value); // expect it to be the same state as initialState ("train")
  });

  it('calls `guessWord` with the correct input value when submit button is clicked', () => {
    componentInput.simulate('submit', fakeEvent); // simulate a form submit
    const guessWordMockCalls = guessWordMock.mock.calls; // get current guessWordMock calls state
    expect(guessWordMockCalls[0][0]).toBe(initialState.value); // expect it to be called with initialState.value ("train")
  });

  it('clears input box on submit', () => {
    componentInput.simulate('submit', fakeEvent); // simulate a form submit
    wrapper.update(); // update wrapper state
    const inputBox = getInputBox(); // get current input value
    expect(inputBox).toBe(''); // expect the input to be empty string
  });

  it('calls `getSecretWord` on reset button click', () => {
    wrapper = setup(Input, { ...defaultProps, success: true }, initialState); // initialize component with updated defaultProps and initialState
    const resetButton = findByTestAttr(wrapper, 'reset-button'); // get reset button
    resetButton.simulate('click'); // simulate reset click
    const getSecretWordMockCalls = getSecretWordMock.mock.calls; // get current getSecretWordMock calls state
    expect(getSecretWordMockCalls).toHaveLength(1); // expect it to be called once
  });
});
