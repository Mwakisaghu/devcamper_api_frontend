import {
  GET_LOGGED_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from './types';

//get loggedIn user
export const getLoggedInUser = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/api/v1/auth/me');
    const data = await res.json();

    dispatch({
      type: GET_LOGGED_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: err.response.data,
    });
  }
};

//Login user
export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await fetch('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: err.response,
    });
  }
};

//Logout user
export const logout = (dispatch) => {
  return { type: LOGOUT_USER };
};
