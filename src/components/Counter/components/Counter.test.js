import { setup, findByTestAttr } from '../tests/utils';
import Counter from './Counter';

const initialState = {
  counter: 0,
  error: '',
};

describe('Counter component', () => {
  let wrapper;
  let incrementButton;
  let simulateIncrementButtonClick;
  let decrementButton;
  let counterDisplay;
  beforeEach(() => {
    wrapper = setup(Counter, null, initialState); // set wrapper with initialState
    incrementButton = findByTestAttr(wrapper, 'increment-button'); // get increment button
    simulateIncrementButtonClick = () => {
      incrementButton.simulate('click'); // simulate an increment click
      wrapper.update(); // update component
    };
    decrementButton = findByTestAttr(wrapper, 'decrement-button'); // get decrement button
    counterDisplay = findByTestAttr(wrapper, 'counter-display'); // get counter button
  });

  it('renders without errors', () => {
    const homeComponent = findByTestAttr(wrapper, 'component-counter'); // get counter component
    expect(homeComponent).toHaveLength(1);
  });

  describe('Counter', () => {
    it('exists', () => expect(counterDisplay).toHaveLength(1));

    it('starts at 0', () => {
      const initialCounterState = wrapper.state('counter'); // get counter state
      expect(initialCounterState).toBe(0);
    });
  });

  describe('Increment button', () => {
    it('exists', () => expect(incrementButton).toHaveLength(1));

    it('increases the counter in the display by 1', () => {
      simulateIncrementButtonClick(); // increment counter by 1

      expect(findByTestAttr(wrapper, 'counter-display').text()).toContain(
        initialState.counter + 1,
      );
    });
  });

  describe('Decrement button', () => {
    it('exists', () => expect(decrementButton).toHaveLength(1));

    beforeEach(() => {
      decrementButton.simulate('click'); // simulate a decrement click
      wrapper.update(); // update component
    });

    it("shouldn't decrease the counter below 0", () =>
      expect(counterDisplay.text()).toContain(0));

    describe('Error', () => {
      let errorDisplay;
      beforeEach(() =>
        (errorDisplay = findByTestAttr(wrapper, 'counter-error'))); // get error

      it('will show if the counter tries to go below 0', () =>
        expect(errorDisplay.text()).toContain("The counter can't go below 0!"));

      it("won't show once the counter has been incremented", () => {
        simulateIncrementButtonClick(); // increment counter by 1

        expect(errorDisplay.text()).toContain(initialState.error);
      });
    });
  });
});
