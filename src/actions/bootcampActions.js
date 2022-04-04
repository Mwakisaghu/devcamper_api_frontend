import { BOOTCAMPS_ERROR, GET__BOOTCAMPS } from '../actions/types';
import axios from 'axios';

//Get all bootcamps
export const getBootcamps = (bootcamp) => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/bootcamps', {
      method: 'GET',
      body: JSON.stringify(bootcamp),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: GET__BOOTCAMPS,
      payload: data,
    });
    await res(() => {});
  } catch (err) {
    dispatch({
      type: BOOTCAMPS_ERROR,
      payload: err.response.data,
    });
  }
};
