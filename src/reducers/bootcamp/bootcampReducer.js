import { GET__BOOTCAMPS } from '../../actions/types';

const initialState = {
  bootcamps: [],
  error: null,
};

/* eslint-disable */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET__BOOTCAMPS:
      return {
        ...state,
        bootcamps: action.payload,
      };
    default:
      return state;
  }
};
