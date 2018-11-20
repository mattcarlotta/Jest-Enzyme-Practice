import { getLetterMatchCount } from '.';

describe('getLetterMatchCount helper', () => {
  const secretWord = 'party';
  it('returns correct count with no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  it('returns correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  it('returns correct count when there are duplicated letters in the guessedWord', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
