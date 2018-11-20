import { setup, findByTestAttr } from '../tests/utils';
import App from './App.js';

describe('Home component', () => {
  const wrapper = setup(App);

  it('renders without errors', () => {
    const app = findByTestAttr(wrapper, 'app');
    expect(app).toHaveLength(1);
  });
});
