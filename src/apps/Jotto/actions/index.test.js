import { storeFactory } from '../tests/utils';
import { getSecretWord } from '.';
import { secretWords } from '../helpers';

describe('getSecretWord action creator', () => {
  it('adds response word to redux state', async () => {
    const store = storeFactory();
    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(secretWords).toContain(newState.secretWord);
  });
});
