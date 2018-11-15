import React from 'react';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';

const Jotto = () => (
  <div className="container">
    <h1>Jotto</h1>
    <Congrats success />
    <GuessedWords
      guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ]}
    />
  </div>
);

export default Jotto;
