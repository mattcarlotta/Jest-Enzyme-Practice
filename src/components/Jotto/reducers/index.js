import { combineReducers } from 'redux';
import successReducer from './Success/successReducer';

export default combineReducers({
  success: successReducer,
});
