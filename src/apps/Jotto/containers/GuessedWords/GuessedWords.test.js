import { checkProps, setup, findByTestAttr } from '../../tests/utils';
import GuessedWords from './GuessedWords';

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
    wrapper = setup(GuessedWords, defaultProps);
    guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
    console.log(wrapper.debug());
  });

  it('does not not throw PropType warnings', () => {
    checkProps(GuessedWords, defaultProps);
  });

  describe('If there are no words guessed', () => {
    beforeEach(() => {
      wrapper = setup(GuessedWords, emptyProps);
    });

    it('renders without errors', () => {
      expect(guessedWordsComponent).toHaveLength(1);
    });

    it('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(instructions.text().length).not.toBe(0);
    });
  });

  describe('If there are words guessed', () => {
    let guessedWordsNode;
    beforeEach(() => {
      wrapper = setup(GuessedWords, guessedProps);
      guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    });

    it('renders without errors', () => {
      expect(guessedWordsComponent).toHaveLength(1);
    });

    it('renders guessed words section', () => {
      expect(guessedWordsNode).toHaveLength(1);
    });

    it('displays correct number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordNodes).toHaveLength(guessedProps.guessedWords.length);
    });
  });
});
