import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

/**
 * Factory function to create a ShallowWrapper for the Home component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Home {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test val.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error', () => {
  const wrapper = setup();
  const homeComponent = findByTestAttr(wrapper, 'component-home');
  expect(homeComponent).toHaveLength(1);
});
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button).toHaveLength(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay).toHaveLength(1);
});
test('counter starts a 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});
test('clicking button increases counter in display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter }); // set state

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button'); // get button
  button.simulate('click'); // simulate click
  wrapper.update(); // update component

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display'); // get counter
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking button decreases counter in display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter }); // set state

  // find button and click
  const button = findByTestAttr(wrapper, 'decrement-button'); // get button
  button.simulate('click'); // simulate click
  wrapper.update(); // update component

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display'); // get counter
  expect(counterDisplay.text()).toContain(counter - 1);
});

describe('Decrement', () => {
  const initialState = {
    counter: 0,
    error: '',
  };
  let wrapper;
  let errorDisplay;
  beforeEach(() => {
    wrapper = setup(null, initialState);
    const decrementButton = findByTestAttr(wrapper, 'decrement-button'); // get button
    decrementButton.simulate('click'); // simulate click
    wrapper.update(); // update component

    errorDisplay = findByTestAttr(wrapper, 'counter-error'); // get error
  });

  it("shouldn't decrement the counter below 0", () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display'); // get counter
    expect(counterDisplay.text()).toContain(initialState.counter);
  });

  it('should show an error if the counter tries to go below 0', () => {
    expect(errorDisplay.text()).toContain("The counter can't go below 0!");
  });

  it("shouldn't show an error once the counter has been incremented", () => {
    // find button and click
    const incrementButton = findByTestAttr(wrapper, 'increment-button'); // get button
    incrementButton.simulate('click'); // simulate click
    wrapper.update(); // update component

    expect(errorDisplay.text()).toContain(initialState.error);
  });
});
