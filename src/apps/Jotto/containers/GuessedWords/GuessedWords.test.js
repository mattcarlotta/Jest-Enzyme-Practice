import { checkProps, setup, findByTestAttr } from '../../tests/utils';
import GuessedWords from './GuessedWords.js';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const emptyProps = {
  guessedWords: [],
};

const guessedProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ],
};

describe('GuessedWords component', () => {
  let wrapper;
  let guessedWordsComponent;
  beforeEach(() => {
    wrapper = setup(GuessedWords, defaultProps); // set up GuessedWords component with defaultProps
    guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words'); // get component element
  });

  it('does not not throw PropType warnings', () =>
    checkProps(GuessedWords, defaultProps));

  describe('If there are no words guessed', () => {
    beforeEach(() => (wrapper = setup(GuessedWords, emptyProps))); // set up GuessedWords component with emptyProps (guessedWords:[])

    it('renders without errors', () =>
      expect(guessedWordsComponent).toHaveLength(1));

    it('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions'); // get instructions element
      expect(instructions.text().length).not.toBe(0);
    });
  });

  describe('If there are words guessed', () => {
    beforeEach(() => (wrapper = setup(GuessedWords, guessedProps))); // set up GuessedWords component with some guessedProps

    it('renders without errors', () =>
      expect(guessedWordsComponent).toHaveLength(1));

    it('renders guessed words section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words'); // get the guessed words node
      expect(guessedWordsNode).toHaveLength(1);
    });

    it('displays correct number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word'); // get guessed words element
      expect(guessedWordNodes).toHaveLength(guessedProps.guessedWords.length); // element should contain 3 nodes
    });
  });
});
