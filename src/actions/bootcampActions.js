import {
  BOOTCAMPS_ERROR,
  GET__BOOTCAMPS,
  CREATE_BOOTCAMP,
} from '../actions/types';
import axios from 'axios';

//Get all bootcamps
export const getBootcamps = (token) => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/bootcamps', {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: GET__BOOTCAMPS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOTCAMPS_ERROR,
      payload: err.response.data,
    });
  }
};

//Create new Bootcamp
export const createBootcamp = (token) => async (dispatch) => {
  try {
    console.log('I was here...');

    const res = await axios.post('/api/v1/bootcamps', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: CREATE_BOOTCAMP,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOTCAMPS_ERROR,
      payload: err.response.data,
    });
  }
};
