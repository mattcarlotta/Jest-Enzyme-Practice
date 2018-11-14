import { setup, findByTestAttr } from '../../tests/utils';
import Home from './Home';

describe('Home component', () => {
  const wrapper = setup(Home);

  it('renders without errors', () => {
    const homeComponent = findByTestAttr(wrapper, 'component-home');
    expect(homeComponent).toHaveLength(1);
  });
});
