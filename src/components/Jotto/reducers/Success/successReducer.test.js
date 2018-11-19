import successReducer from './successReducer';
import * as types from '../../types';

describe('Success Reducer', () => {
  it('should return a default initial state of `false`', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });
  it('should return a state of `true` upon receiving type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: types.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
