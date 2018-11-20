import { storeFactory } from '../tests/utils';
import { getSecretWord } from '.';
import { secretWords } from '../helpers';

describe('getSecretWord action creator', () => {
  it('adds response word to redux state', async () => {
    const store = storeFactory(); // create store
    await store.dispatch(getSecretWord()); // dispatch getSecretWord action creator
    const newState = store.getState(); // get store state
    expect(secretWords).toContain(newState.secretWord);
  });
});
