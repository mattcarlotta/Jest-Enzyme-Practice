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

const initialState = {
  counter: 0,
  error: '',
};

describe('Home component', () => {
  let wrapper;
  let incrementButton;
  let simulateIncrementButtonClick;
  let decrementButton;
  let counterDisplay;
  beforeEach(() => {
    wrapper = setup(null, initialState); // set wrapper with initialState
    incrementButton = findByTestAttr(wrapper, 'increment-button'); // get increment button
    simulateIncrementButtonClick = () => {
      incrementButton.simulate('click'); // simulate increment click
      wrapper.update(); // update component
    };
    decrementButton = findByTestAttr(wrapper, 'decrement-button'); // get decrement button
    counterDisplay = findByTestAttr(wrapper, 'counter-display'); // get counter button
  });

  it('renders without errors', () => {
    const homeComponent = findByTestAttr(wrapper, 'component-home');
    expect(homeComponent).toHaveLength(1);
  });

  describe('Counter', () => {
    it('exists', () => {
      expect(counterDisplay).toHaveLength(1);
    });

    it('starts a 0', () => {
      const initialCounterState = wrapper.state('counter');
      expect(initialCounterState).toBe(0);
    });
  });

  describe('Increment button', () => {
    it('exists', () => {
      expect(incrementButton).toHaveLength(1);
    });

    test('increases the counter in the display by 1', () => {
      simulateIncrementButtonClick();

      expect(findByTestAttr(wrapper, 'counter-display').text()).toContain(
        initialState.counter + 1,
      );
    });
  });

  describe('Decrement button', () => {
    it('exists', () => {
      expect(incrementButton).toHaveLength(1);
    });

    beforeEach(() => {
      decrementButton.simulate('click'); // simulate decrement click
      wrapper.update(); // update component
    });

    it("shouldn't decrease the counter below 0", () => {
      expect(counterDisplay.text()).toContain(0);
    });

    describe('Error', () => {
      let errorDisplay;
      beforeEach(() => {
        errorDisplay = findByTestAttr(wrapper, 'counter-error'); // get error
      });

      it('will show if the counter tries to go below 0', () => {
        expect(errorDisplay.text()).toContain("The counter can't go below 0!");
      });

      it("won't show once the counter has been incremented", () => {
        simulateIncrementButtonClick();

        expect(errorDisplay.text()).toContain(initialState.error);
      });
    });
  });
});
