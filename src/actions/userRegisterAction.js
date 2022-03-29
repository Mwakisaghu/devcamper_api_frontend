import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './types';

//Register User
export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await fetch('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });

    await res(() => {});
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: err.response.statusText,
    });
  }
};
