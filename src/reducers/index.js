import { combineReducers } from 'redux';
import userReducers from './auth/userReducers';
import bootcampReducer from './bootcamp/bootcampReducer';

export default combineReducers({
  user: userReducers,
  bootcamp: bootcampReducer,
});
