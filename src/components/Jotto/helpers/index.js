/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Numbers of matched letters between guessedWord and secretWord
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
};

export const secretWords = ['flower', 'party', 'wrench', 'fry', 'baker'];

export const fetchSecretWord = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: secretWords[Math.floor(Math.random() * secretWords.length)],
      });
    }, 300);
  });
