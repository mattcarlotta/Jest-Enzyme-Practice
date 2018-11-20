import { checkProps, setup, findByTestAttr } from '../../tests/utils';
import Congrats from './Congrats.js';

const defaultProps = {
  success: false,
};

describe('Congrats component', () => {
  let wrapper;
  let congratsComponent;
  beforeEach(() => {
    wrapper = setup(Congrats, defaultProps); // set up Congrats component with defaultProps
    congratsComponent = findByTestAttr(wrapper, 'component-congrats'); // get component
  });

  it('renders without errors', () => expect(congratsComponent).toHaveLength(0));

  it('does not not throw PropType warnings', () =>
    checkProps(Congrats, defaultProps));

  it('renders no text when success prop is false', () =>
    expect(wrapper.type()).toBeNull());

  it('renders congrats message when success prop is true', () => {
    wrapper = setup(Congrats, { success: true }); // set up Congrats component with success: true
    const message = findByTestAttr(wrapper, 'congrats-message'); // get congrats message element
    expect(message.text().length).not.toBe(0);
  });
});
