import { GET__BOOTCAMPS } from '../../actions/types';

const initialState = {
  bootcamp: [],
  error: null,
};

/* eslint-disable */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET__BOOTCAMPS:
      return {
        ...state,
        bootcamp: action.payload,
      };
    default:
      return state;
  }
};
