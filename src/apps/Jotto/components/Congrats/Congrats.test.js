import { checkProps, setup, findByTestAttr } from '../../tests/utils';
import Congrats from './Congrats.js';

const defaultProps = {
  success: false,
};

describe('Congrats component', () => {
  let wrapper;
  let congratsComponent;
  beforeEach(() => {
    wrapper = setup(Congrats, defaultProps);
    congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  });
  it('renders without errors', () => {
    expect(congratsComponent).toHaveLength(0);
  });
  it('renders no text when success prop is false', () => {
    expect(wrapper.type()).toBeNull();
  });
  it('renders congrats message when success prop is true', () => {
    wrapper = setup(Congrats, { success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
  });
  it('does not not throw PropType warnings', () => {
    checkProps(Congrats, defaultProps);
  });
});
