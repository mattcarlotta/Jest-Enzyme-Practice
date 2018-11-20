import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from '../../tests/utils';
import Input from './Input';

describe('Input component', () => {
  let wrapper;
  let store;
  let initialState = { success: false };
  beforeEach(() => {
    store = storeFactory(initialState);
    wrapper = shallow(<Input store={store} />).dive();
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
      store = storeFactory(initialState);
      wrapper = shallow(<Input store={store} />).dive();
    });

    it('renders null if `success` is true', () => {
      expect(wrapper.type()).toBeNull();
    });
  });
});
