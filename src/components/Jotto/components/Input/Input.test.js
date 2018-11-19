import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, storeFactory, findByTestAttr } from '../../tests/utils';
import Input from './Input';

describe('Input component', () => {
  let wrapper;
  let store;
  const initialState = {};
  beforeEach(() => {
    store = storeFactory(initialState);
    wrapper = shallow(<Input store={store} />).dive();
  });
  describe('Word has not been guessed', () => {
    it('renders without errors', () => {});
    it('renders an input box', () => {});
    it('renders a submit button', () => {});
  });
  describe('Word has been guessed', () => {
    it('renders without errors', () => {});
    it('does not render an input box', () => {});
    it('does not render a submit button', () => {});
  });
});
