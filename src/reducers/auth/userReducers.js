import {
  GET_LOGGED_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
} from '../../actions/types';

const data = {
  token: null,
};

const initialState = data;

/* eslint-disable */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGGED_USER:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGIN_USER_FAILURE:
      return {};
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case REGISTER_USER_FAILURE:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
