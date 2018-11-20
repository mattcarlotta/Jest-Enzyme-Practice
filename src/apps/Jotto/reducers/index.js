import { combineReducers } from 'redux';
import guessedWordsReducer from './GuessedWords/guessedWordsReducer';
import secretWordReducer from './SecretWord/secretWordReducer';
import successReducer from './Success/successReducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer,
});
