import { GET__BOOTCAMPS, CREATE_BOOTCAMP } from '../../actions/types';

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
    case CREATE_BOOTCAMP:
      return {
        ...state,
        bootcamps: [...state.bootcamps, action.payload],
      };
    default:
      return state;
  }
};
