import { getLetterMatchCount } from '.';

describe('getLetterMatchCount helper', () => {
  const secretWord = 'party';
  const retrieveMatchCount = str => getLetterMatchCount(str, secretWord);

  it('returns correct count with no matching letters', () => {
    const letterMatchCount = retrieveMatchCount('bones');
    expect(letterMatchCount).toBe(0);
  });

  it('returns correct count when there are 3 matching letters', () => {
    const letterMatchCount = retrieveMatchCount('train');
    expect(letterMatchCount).toBe(3);
  });

  it('returns correct count when there are duplicated letters in the guessedWord', () => {
    const letterMatchCount = retrieveMatchCount('parka');
    expect(letterMatchCount).toBe(3);
  });
});
