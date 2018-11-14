import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App component', () => {
  const wrap = mount(<App />);

  it('renders without errors', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });
});
