import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from '../../tests/utils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - initial state for component
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe('Input component', () => {
  let wrapper;
  let initialState = { success: false };
  beforeEach(() => {
    wrapper = setup(initialState);
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
      wrapper = setup(initialState);
    });

    it('renders null if `success` is true', () => {
      expect(wrapper.type()).toBeNull();
    });
  });

  describe('Redux props', () => {
    beforeEach(() => {
      initialState = { success: true };
      wrapper = setup(initialState);
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
  });
});
