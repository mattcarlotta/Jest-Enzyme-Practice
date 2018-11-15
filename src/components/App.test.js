import React from 'react';
import { mount } from 'enzyme';
import App from './App.js';

describe('App component', () => {
  const wrapper = mount(<App />);

  it('renders without errors', () => {
    expect(wrapper.find(App).exists()).toBe(true);
  });
});
