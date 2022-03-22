import { combineReducers } from 'redux';
import userReducers from './auth/userReducers';

export default combineReducers({
  user: userReducers,
});
