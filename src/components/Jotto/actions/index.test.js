import moxios from 'moxios';
import { storeFactory } from '../tests/utils';
import { getSecretWord } from '.';

describe('getSecretWord action creator', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('adds response word to state', async () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const res = moxios.requests.mostRecent();
      res.respondWith({
        state: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
